import Controller from './Controller';
import Tile from './Tile';
import Vector2 from '../interfaces/Vector2';
import IStore from '../interfaces/IStore';
import Screen from './Screen';
import Map from '../world/Map';

export default class Viewer {
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
		} else {
		}

		screen.indexToScreenSpace(this.cursorLocation);
	}
	public render(screen: Screen): void {
		// screen.renderTileOutline(this.cursorLocation.x, this.cursorLocation.y);
	}
}
