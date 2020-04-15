import Screen from './Screen';
import Controller from './Controller';
import IStore from '../interfaces/IStore';
import Map from '../world/Map';
import Editor from './Editor';
import Viewer from './Viewer';
import { Store } from 'vuex';

export default class MapManager {
	private store: Store<IStore>;
	private screen: Screen;
	private controller: Controller;
	private mutator: Editor | Viewer;
	private map: Map;

	constructor(store: Store<IStore>, editable: boolean) {
		this.store = store;
		this.controller = new Controller();
		this.screen = new Screen();
		this.map = new Map(this.store);
		this.mutator = editable
			? new Editor(this.store)
			: new Viewer(this.store);
		this.controller.registerEvents();
	}

	public setFocus(hasFocus: boolean): void {
		this.controller.setFocus(hasFocus);
	}

	public update(dt: number) {
		// console.log('update');
		this.controller.update(dt, this.screen.camera);
		this.mutator.update(this.screen, this.controller, this.map);
	}

	public render(context: CanvasRenderingContext2D) {
		if (!this.store.state.tiles.hasLoaded()) return;
		// Begin the render context
		this.screen.begin(context);
		// Render all tiles
		this.map.render(this.screen);
		this.mutator.render(this.screen);
		// Close the canvas context
		this.screen.end();
	}

	public close() {}
}
