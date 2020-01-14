import Vector2 from '../interfaces/Vector2';
import Tile from '../graphics/Tile';
import Screen from '../graphics/Screen';
import IStore from '../interfaces/IStore';
import { Store } from 'vuex';
import TileUtils from '../util/TileUtils';
export default class Map {
	private tiles: Tile[];
	private width: number;
	private height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.tiles = new Array<Tile>(width * height);
	}

	public initTiles(store: Store<IStore>) {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.tiles[this.width * y + x] = TileUtils.createTile(
					store,
					'grass',
					x,
					y
				);
			}
		}
	}

	public getTile(xi: number, yi: number): Tile | undefined {
		if (xi < 0 || xi >= this.width || yi < 0 || yi >= this.height)
			return undefined;
		return this.tiles[this.width * yi + xi];
	}

	public render(screen: Screen) {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				screen.renderTile(this.getTile(x, y)!);
			}
		}
	}
}
