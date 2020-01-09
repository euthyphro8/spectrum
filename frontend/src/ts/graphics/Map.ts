//#region [white] Imports
import Tile from './Tile';
import Screen from './Screen';
import Controller from './Controller';
import { Store } from 'vuex';
import IStore from '../interfaces/IStore';
//#endregion

class Map {
	//#region [purple] Fields
	private store: Store<IStore>;
	private screen: Screen;
	private controller: Controller;
	private tiles: Tile[][];
	private width: number;
	private height: number;
	//#endregion

	//#region [blue] Constructor
	constructor(store: Store<IStore>) {
		this.store = store;
		this.controller = new Controller();
		this.screen = new Screen();

		this.width = 16;
		this.height = 16;
		this.tiles = [];
		this.controller.registerEvents();
	}
	//#endregion

	//#region [green] Public
	public update(dt: number) {
		this.controller.update(dt, this.screen.camera);
	}

	public render(context: CanvasRenderingContext2D) {
		if (!this.store.state.assets.hasLoaded()) return;
		// Begin the render context
		this.screen.begin(context);
		// Render all tiles
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.screen.renderTile(this.tiles[y][x]);
			}
		}
		// Close the canvas context
		this.screen.end(context);
	}

	public close() {}
	//#endregion

	//#region [yellow] Private
	private initTiles() {
		for (let y = 0; y < this.height; y++) {
			this.tiles[y] = [];
			for (let x = 0; x < this.width; x++) {
				this.tiles[y][x] = this.createTile('cobble', x, y);
			}
		}
	}
	private createTile(src: string, x: number, y: number): Tile {
		// TODO hava a resource map so the same image never gets loaded twice.
		let tile: Tile = {
			sprite: this.store.state.assets.loadImage(src),
			x,
			y
		};
		return tile;
	}
	//#endregion
}
export default Map;
