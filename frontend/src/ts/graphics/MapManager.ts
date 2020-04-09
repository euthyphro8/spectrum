//#region [white] Imports
import Screen from './Screen';
import Controller from './Controller';
import IStore from '../interfaces/IStore';
import Map from '../world/Map';
import Editor from './Editor';
//#endregion

export default class MapManager {
	//#region [purple] Fields
	private store: IStore;
	private screen: Screen;
	private controller: Controller;
	private editor: Editor;
	private map: Map;
	//#endregion

	//#region [blue] Constructor
	constructor(store: IStore) {
		this.store = store;
		this.controller = new Controller();
		this.screen = new Screen();
		this.map = new Map(this.store);
		this.editor = new Editor(this.store);
		this.controller.registerEvents();
	}
	//#endregion

	//#region [green] Public
	public setFocus(hasFocus: boolean): void {
		this.controller.setFocus(hasFocus);
	}

	public update(dt: number) {
		// console.log('update');
		this.controller.update(dt, this.screen.camera);
		this.editor.update(this.screen, this.controller, this.map);
	}

	public render(context: CanvasRenderingContext2D) {
		if (!this.store.tiles.hasLoaded()) return;
		// Begin the render context
		this.screen.begin(context);
		// Render all tiles
		this.map.render(this.screen);
		this.editor.render(this.screen);
		// Close the canvas context
		this.screen.end();
	}

	public close() {}
	//#endregion
}
