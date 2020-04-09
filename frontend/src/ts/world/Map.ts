import Tile from '../graphics/Tile';
import Screen from '../graphics/Screen';
import { coordToTileId, updateTileId } from '../interfaces/IMap';
import IStore from '../interfaces/IStore';
export default class Map {
	private store: IStore;
	private tiles: Tile[];
	private width: number;
	private height: number;

	constructor(store: IStore) {
		this.store = store;
		let registry = store.tiles;
		let map = store.currentMap;
		this.width = map.width;
		this.height = map.height;
		this.tiles = new Array<Tile>(this.width * this.height);

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				let tileId = coordToTileId(map, x, y);
				this.tiles[this.width * y + x] = {
					id: tileId,
					sprite: registry.getImage(tileId),
					x: x,
					y: y
				};
			}
		}
	}

	public getTile(xi: number, yi: number): Tile | undefined {
		if (xi < 0 || xi >= this.width || yi < 0 || yi >= this.height)
			return undefined;
		return this.tiles[this.width * yi + xi];
	}

	public updateTile(
		xi: number,
		yi: number,
		id: number,
		sprite: HTMLImageElement
	): void {
		let tile = this.getTile(xi, yi);
		if (tile) {
			tile.id = id;
			tile.sprite = sprite;
			updateTileId(this.store.currentMap, xi, yi, id);
		}
	}

	public render(screen: Screen) {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				screen.renderTile(this.getTile(x, y)!);
			}
		}
	}
}
