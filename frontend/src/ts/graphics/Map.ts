//#region [white] Imports
import Tile from './Tile';
import Screen from './Screen';
import Controller from './Controller';
import { Store } from 'vuex';
import IStore from '../interfaces/IStore';
import AssetManager from '../util/AssetManager';
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
		this.initTiles();
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
		let point = this.screen.renderTileOutline(
			this.controller.mx,
			this.controller.my
		);
		if (this.controller.getClick()) {
			console.log(`${point.tx}, ${point.ty}`);
			if (point.ty < this.tiles.length) {
				if (point.tx < this.tiles[point.ty].length) {
					console.log('in bounds');
					if (this.store.state.selected) {
						this.tiles[point.ty][point.tx] = this.createTile(
							this.store.state.selected,
							point.tx,
							point.ty
						);
					}
				}
			}
		}
		// Close the canvas context
		this.screen.end();
	}

	public close() {}
	//#endregion

	//#region [yellow] Private
	private initTiles() {
		for (let y = 0; y < this.height; y++) {
			this.tiles[y] = [];
			for (let x = 0; x < this.width; x++) {
				this.tiles[y][x] = this.createTile('grass', x, y);
			}
		}
	}
	private createTile(imgName: string, x: number, y: number): Tile {
		// TODO hava a resource map so the same image never gets loaded twice.
		let tile: Tile = {
			sprite: this.store.state.assets.getImage(imgName),
			x,
			y
		};
		return tile;
	}
	//#endregion
}
export default Map;
