//#region [white] Imports
import Tile from './Tile';
import Screen from './Screen';
import Controller from './Controller';
import { Store } from 'vuex';
import IStore from '../interfaces/IStore';
import AssetManager from '../util/AssetManager';
import TileUtils from '../util/TileUtils';
import Map from '../world/Map';
import Editor from './Editor';
//#endregion

export default class MapManager {
	//#region [purple] Fields
	private store: Store<IStore>;
	private screen: Screen;
	private controller: Controller;
	private editor: Editor;
	private map: Map;
	//#endregion

	//#region [blue] Constructor
	constructor(store: Store<IStore>) {
		this.store = store;
		this.controller = new Controller();
		this.screen = new Screen();
		this.map = new Map(16, 16);
		this.editor = new Editor(this.store);
		this.controller.registerEvents();
	}
	//#endregion

	//#region [green] Public
	public update(dt: number) {
		this.controller.update(dt, this.screen.camera);
		this.editor.update(this.screen, this.controller, this.map);
	}

	public render(context: CanvasRenderingContext2D) {
		if (!this.store.state.assets.hasLoaded()) return;
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
