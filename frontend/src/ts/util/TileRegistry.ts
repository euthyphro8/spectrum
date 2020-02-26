import axios from 'axios';
import { instanceOfITile } from '../interfaces/ITile';

export default class TileRegistry {
	private names: string[];
	private images: string[];

	constructor() {
		this.names = [];
		this.images = [];
	}

	public async init() {
		let res = await axios.get('/requestTiles');
		if (res.data.tiles) {
			for (let tile in res.data.tiles) {
				if (instanceOfITile(tile)) {
					this.names[tile.id] = tile.name;
					this.images[tile.id] = tile.image;
				}
			}
		}
	}

	public getName(tileId: number): string {
		return this.names[tileId];
	}

	public getImage(tileId: number): string {
		return this.images[tileId];
	}
}
