import Controller from './Controller';
import Tile from './Tile';
import Vector2 from '../interfaces/Vector2';
import IStore from '../interfaces/IStore';
import Screen from './Screen';
import Map from '../world/Map';

export default class Editor {
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
			// Gets the current tile being hovered over from the map
			let tile = map.getTile(
				this.cursorLocation.x,
				this.cursorLocation.y
			);
			// Checks if the tile exists and something in the palette is selected
			if (tile && this.store.selected) {
				if (this.lastTileEdited !== tile) {
					// Updates the map with the selected palette tile
					map.updateTile(
						this.cursorLocation.x,
						this.cursorLocation.y,
						this.store.selected,
						this.store.tiles.getImage(this.store.selected)
					);
					this.lastTileEdited = tile;
				}
			}
		} else {
			this.lastTileEdited = undefined;
		}

		screen.indexToScreenSpace(this.cursorLocation);
	}
	public render(screen: Screen): void {
		screen.renderTileOutline(this.cursorLocation.x, this.cursorLocation.y);
	}
}
