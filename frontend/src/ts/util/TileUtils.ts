import Tile from '../graphics/Tile';
import { Store } from 'vuex';
import IStore from '../interfaces/IStore';

export default class TileUtils {
	public static createTile(
		store: Store<IStore>,
		imgName: string,
		x: number,
		y: number
	): Tile {
		return {
			sprite: store.state.assets.getImage(imgName),
			x,
			y
		};
	}
}
