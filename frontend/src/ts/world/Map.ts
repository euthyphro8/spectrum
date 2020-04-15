import Tile from '../graphics/Tile';
import Screen from '../graphics/Screen';
import {
	coordToAssetId,
	updateAssetId,
	coordToCharacterId,
	addCharacterId,
	removeCharacterId,
	removeCharacterCoord,
	coordToTileId,
	updateTileId
} from '../interfaces/IMap';
import IStore from '../interfaces/IStore';
import ICharacter from '../interfaces/ICharacter';
import { Store } from 'vuex';

/**
 * A renderable map class responsible for interfacing with the stored
 * IMap object. Does not handle saving or loading the IMap object.
 * Simply in interacting with it.
 */
export default class Map {
	private store: Store<IStore>;
	private assets: Tile[];
	private tiles: Tile[];
	private characters: (ICharacter | undefined)[];
	private width: number;
	private height: number;
	private loaded: boolean;

	/**
	 * Creates a new renderable map that manages the stored map object.
	 * This includes updating renderable states and being an entrypoint
	 * to updating the map itself.
	 * @param store The active vuex store.
	 */
	constructor(store: Store<IStore>) {
		this.loaded = false;
		this.store = store;
		let assetRegistry = store.state.assets;
		let tileRegistry = store.state.tiles;
		let map = store.state.currentMap;
		this.width = map.width;
		this.height = map.height;
		this.assets = new Array<Tile>(this.width * this.height);
		this.tiles = new Array<Tile>(this.width * this.height);

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				let assetId = coordToAssetId(map, x, y);
				this.assets[this.width * y + x] = {
					id: assetId,
					sprite:
						assetId > 0
							? assetRegistry.getImage(assetId)
							: undefined,
					x: x,
					y: y
				};
				let tileId = coordToTileId(map, x, y);
				this.tiles[this.width * y + x] = {
					id: tileId,
					sprite:
						tileId > 0 ? tileRegistry.getImage(tileId) : undefined,
					x: x,
					y: y
				};
			}
		}
		// Has to be loaded async since the characters may not be cached and
		// could be requested from the server.
		this.characters = new Array<ICharacter>(this.width * this.height);
		store.state.characters
			.getCharacters(store.state.currentMap.campaign)
			.then((characters) => {
				for (let entry of map.characters) {
					try {
						const pos = entry.split('_')[0];
						const cId = entry.split('_')[1];
						const x = parseInt(pos.split(',')[0]);
						const y = parseInt(pos.split(',')[1]);
						for (const c of characters) {
							if (c.id === cId) {
								this.characters[this.width * y + x] = c;
							}
						}
						if (!this.characters[this.width * y + x]) {
							console.log(
								`[ Map ] Failed to find charcter matching given id, ${cId} in map ${map.name}.`
							);
						}
					} catch {
						console.log(
							`[ Map ] Could not parse character entry in map ${map.name}. Got ${entry}`
						);
					}
				}
				this.loaded = true;
			});
	}
	/**
	 * Gets the asset located at the given position. Can be null.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 */
	public getAsset(xi: number, yi: number): Tile | undefined {
		if (xi < 0 || xi >= this.width || yi < 0 || yi >= this.height)
			return undefined;
		return this.assets[this.width * yi + xi];
	}

	/**
	 * Gets the character located at the given position. Can be null.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 */
	public getCharacter(xi: number, yi: number): ICharacter | undefined {
		if (xi < 0 || xi >= this.width || yi < 0 || yi >= this.height)
			return undefined;
		return this.characters[this.width * yi + xi];
	}

	/**
	 * Gets the tile located at the given position. Can be null.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 */
	public getTile(xi: number, yi: number): Tile | undefined {
		if (xi < 0 || xi >= this.width || yi < 0 || yi >= this.height)
			return undefined;
		return this.tiles[this.width * yi + xi];
	}

	/**
	 * Updates the tile on the renderable map instance as well as the stored map data object.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 * @param id id of asset tile to replace it with
	 * @param sprite The new sprite being used to replace
	 */
	public updateAsset(
		xi: number,
		yi: number,
		id: number,
		sprite?: HTMLImageElement
	): void {
		let tile = this.getTile(xi, yi);
		if (tile) {
			tile.id = id;
			tile.sprite = sprite;
			updateAssetId(this.store.state.currentMap, xi, yi, id);
		}
	}

	/**
	 * Updates the character on the renderable map instance as well as the stored map data object.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 * @param id id of character object being used to replace
	 */
	public updateCharacter(xi: number, yi: number, id: string): void {
		// Removes any character that may had been at this position
		removeCharacterCoord(this.store.state.currentMap, xi, yi);
		// Removes the new character if it was in some other position
		removeCharacterId(this.store.state.currentMap, id);
		// Then adds the charcter to the IMap
		addCharacterId(this.store.state.currentMap, xi, yi, id);

		// Then mirrors the update for the renderable model.
		this.store.state.characters
			.getCharacters(this.store.state.currentMap.campaign)
			.then((characters) => {
				let updated = false;
				for (let c of characters) {
					// Finds the ICharacter object matching the Id
					if (c.id === id) {
						// Finds rid of any other entries in the map that this character may hold
						for (let i = 0; i < this.characters.length; i++) {
							const oc = this.characters[i];
							if (oc && oc.id === c.id) {
								// Obviously, to avoid duplicates
								this.characters[i] = undefined;
							}
						}
						// Then places this character at the desired position.
						this.characters[this.width * yi + xi] = c;
						updated = true;
					}
				}
				// FIXME probably handle with a dialog box?
				if (!updated) {
					// In order to keep IMap synced with the renderable map.
					this.characters[this.width * yi + xi] = undefined;
					console.log(
						`[ Map ] Failed to find character ${id} in registry.`
					);
				}
			});
	}

	/**
	 * Updates the tile on the renderable map instance as well as the stored map data object.
	 * @param xi x in map coordinate space
	 * @param yi y in map coordinate space
	 * @param id id of the 'tile' tile to replace it with
	 * @param sprite The new sprite being used to replace
	 */
	public updateTile(
		xi: number,
		yi: number,
		id: number,
		sprite?: HTMLImageElement
	): void {
		let tile = this.getTile(xi, yi);
		if (tile) {
			tile.id = id;
			tile.sprite = sprite;
			updateTileId(this.store.state.currentMap, xi, yi, id);
		}
	}

	/**
	 * Renders all loaded tiles, assets, and characters onto the active canvas.
	 * @param screen The screen object containing the active renderable context.
	 */
	public render(screen: Screen) {
		if (this.loaded) {
			for (let y = 0; y < this.height; y++) {
				for (let x = 0; x < this.width; x++) {
					screen.renderTile(this.getTile(x, y)!);
					screen.renderTile(this.getAsset(x, y)!);
					const c = this.getCharacter(x, y);
					if (c) {
						let entity = this.store.state.entities.getImage(
							c.entityId
						);
						screen.renderRawTile(x, y, entity);
					}
				}
			}
		}
	}
}
