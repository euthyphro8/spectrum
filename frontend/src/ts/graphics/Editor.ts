import Controller from './Controller';
import Tile from './Tile';
import Vector2 from '../interfaces/Vector2';
import IStore from '../interfaces/IStore';
import Screen from './Screen';
import Map from '../world/Map';
import { Store } from 'vuex';

export default class Editor {
	private lastAssetEdited?: Tile;
	private lastTileEdited?: Tile;
	private store: Store<IStore>;
	private cursorLocation: Vector2;

	constructor(store: Store<IStore>) {
		this.store = store;
		this.cursorLocation = new Vector2();
	}

	public update(screen: Screen, controller: Controller, map: Map): void {
		this.cursorLocation.x = controller.mx;
		this.cursorLocation.y = controller.my;
		screen.screenToIndexSpace(this.cursorLocation);

		if (controller.getClick()) {
			//FIXME The assets and tiles checks can be simplified with the updated Map class
			// (using Update* instead of get*).

			// Editing assets
			if (this.store.state.editingAssets) {
				// Gets the current asset being hovered over from the map
				let asset = map.getAsset(
					this.cursorLocation.x,
					this.cursorLocation.y
				);
				// Checks if the asset exists and something in the palette is selected
				if (asset) {
					if (this.lastAssetEdited !== asset) {
						map.updateAsset(
							this.cursorLocation.x,
							this.cursorLocation.y,
							this.store.state.selectedAsset,
							this.store.state.selectedAsset > 0
								? this.store.state.assets.getImage(
										this.store.state.selectedAsset
								  )
								: undefined
						);
						// asset.sprite =
						// 	this.store.state.selectedAsset > 0
						// 		? this.store.state.assets.getImage(
						// 				this.store.state.selectedAsset
						// 		  )
						// 		: undefined;
						this.lastAssetEdited = asset;
					}
				}
			} else {
				this.lastAssetEdited = undefined;
			}
			// Editing tiles
			if (this.store.state.editingTiles) {
				// Gets the current tile being hovered over from the map
				let tile = map.getTile(
					this.cursorLocation.x,
					this.cursorLocation.y
				);
				// Checks if the tile exists and something in the palette is selected
				if (tile) {
					if (this.lastTileEdited !== tile) {
						map.updateTile(
							this.cursorLocation.x,
							this.cursorLocation.y,
							this.store.state.selectedTile,
							this.store.state.selectedTile > 0
								? this.store.state.tiles.getImage(
										this.store.state.selectedTile
								  )
								: undefined
						);
						// tile.sprite =
						// 	this.store.state.selectedTile > 0
						// 		? this.store.state.tiles.getImage(
						// 				this.store.state.selectedTile
						// 		  )
						// 		: undefined;
						// this.lastTileEdited = tile;
					}
				}
			} else {
				this.lastTileEdited = undefined;
			}
			//Editing characters
			if (this.store.state.editingCharacters) {
				if (this.store.state.selectedCharacter !== '') {
					map.updateCharacter(
						this.cursorLocation.x,
						this.cursorLocation.y,
						this.store.state.selectedCharacter
					);
				}
			}
		} else {
			this.lastTileEdited = undefined;
			this.lastAssetEdited = undefined;
		}

		screen.indexToScreenSpace(this.cursorLocation);
	}
	public render(screen: Screen): void {
		screen.renderTileOutline(this.cursorLocation.x, this.cursorLocation.y);
	}
}
