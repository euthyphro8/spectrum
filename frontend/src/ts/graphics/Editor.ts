import Controller from './Controller';
import Tile from './Tile';
import Vector2 from '../interfaces/Vector2';
import IStore from '../interfaces/IStore';
import Screen from './Screen';
import Map from '../world/Map';

export default class Editor {
	private lastAssetEdited?: Tile;
	private lastTileEdited?: Tile;
	private store: IStore;
	private cursorLocation: Vector2;

	constructor(store: IStore) {
		this.store = store;
		this.cursorLocation = new Vector2();
	}

	public update(screen: Screen, controller: Controller, map: Map): void {
		this.cursorLocation.x = controller.mx;
		this.cursorLocation.y = controller.my;
		screen.screenToIndexSpace(this.cursorLocation);

		if (controller.getClick()) {
			// Editing assets
			if (this.store.editingAssets) {
				// Gets the current tile being hovered over from the map
				let asset = map.getAsset(
					this.cursorLocation.x,
					this.cursorLocation.y
				);
				// Checks if the tile exists and something in the palette is selected
				if (asset) {
					if (this.lastAssetEdited !== asset) {
						asset.sprite =
							this.store.selectedAsset > 0
								? this.store.assets.getImage(
										this.store.selectedAsset
								  )
								: undefined;
						this.lastAssetEdited = asset;
					}
				}
			} else {
				this.lastAssetEdited = undefined;
			}
			// Editing tiles
			if (this.store.editingTiles) {
				// Gets the current tile being hovered over from the map
				let tile = map.getTile(
					this.cursorLocation.x,
					this.cursorLocation.y
				);
				// Checks if the tile exists and something in the palette is selected
				if (tile) {
					if (this.lastTileEdited !== tile) {
						tile.sprite =
							this.store.selectedTile > 0
								? this.store.tiles.getImage(
										this.store.selectedTile
								  )
								: undefined;
						this.lastTileEdited = tile;
					}
				}
			}
		} else {
			this.lastTileEdited = undefined;
		}
		if (this.store.editingCharacters) {
		}

		screen.indexToScreenSpace(this.cursorLocation);
	}
	public render(screen: Screen): void {
		screen.renderTileOutline(this.cursorLocation.x, this.cursorLocation.y);
	}
}
