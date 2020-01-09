//#region [white] Imports
//#endregion

class AssetManager {
	//#region [red] Constants
	public static readonly TILE_SIZE = 64;
	//#endregion

	//#region [purple] Fields
	private images: Map<string, HTMLImageElement>;
	private unloadedCount: number;
	//#endregion

	//#region [blue] Constructor
	constructor() {
		this.images = new Map<string, HTMLImageElement>();
		this.unloadedCount = 0;
		this.loadImage(require('@/assets/map/cobble.png'));
	}
	//#endregion

	//#region [green] Public
	public hasLoaded(): boolean {
		return this.unloadedCount === 0;
	}

	public loadImage(src: string): HTMLImageElement {
		console.log(src);
		let name = src;
		let reg = /[\/][i][m][g][\/]([\w]+)/g;
		let matches = reg.exec(src);
		for (let match of matches!) console.log(match);
		if (matches && matches.length > 0) {
			name = matches[1];
		}
		if (this.images.has(name)) {
			return this.images.get(name)!;
		}
		if (name === src) {
			throw new Error(
				'Tried to load an image from the common name before it had been created.'
			);
		}
		this.unloadedCount += 1;
		let sprite = new Image(AssetManager.TILE_SIZE, AssetManager.TILE_SIZE);
		sprite.src = src;
		sprite.onload = this.onImageLoaded.bind(this);
		this.images.set(name, sprite);
		return sprite;
	}
	//#endregion

	//#region [yellow] Private
	private onImageLoaded(): void {
		this.unloadedCount -= 1;
	}
	//#endregion
}
export default AssetManager;
