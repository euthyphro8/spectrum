import axios from 'axios';
import { instanceOfITile } from '../interfaces/ITile';

export default class TileRegistry {
	private names: string[];
	private images: HTMLImageElement[];
	private loaded: boolean;

	constructor() {
		this.names = [];
		this.images = [];
		this.loaded = false;
	}

	public async init() {
		let res = await axios.get('/requestTiles');
		if (res.data.tiles) {
			for (let tile of res.data.tiles) {
				if (instanceOfITile(tile)) {
					this.names[tile.id] = tile.name;
					let image = new Image();
					image.src = tile.image;
					this.images[tile.id] = image;
				}
			}
		}
		this.loaded = true;
	}

	public getName(tileId: number): string {
		return this.names[tileId];
	}

	public getImage(tileId: number): HTMLImageElement {
		return this.images[tileId];
	}

	public hasLoaded(): boolean {
		return this.loaded;
	}
}
