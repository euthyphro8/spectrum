//#region [white] Imports
//#endregion

class AssetManager {
	//#region [red] Constants
	public static readonly TILE_SIZE = 64;
	public static readonly ROCK_IMAGE = 'rock';
	public static readonly COBBLE_IMAGE = 'cobble';
	public static readonly GRASS_IMAGE = 'grass';
	//#endregion

	//#region [purple] Fields
	private images: Map<string, HTMLImageElement>;
	private unloadedCount: number;
	//#endregion

	//#region [blue] Constructor
	constructor() {
		this.images = new Map<string, HTMLImageElement>();
		this.unloadedCount = 0;
		this.initImages();
	}
	//#endregion

	//#region [green] Public
	public hasLoaded(): boolean {
		return this.unloadedCount === 0;
	}

	public getImage(name: string): HTMLImageElement {
		const img = this.images.get(name);
		if (img) return img;
		throw new Error(`Image ${name} has not been loaded.`);
	}

	public loadImage(name: string, src: string): void {
		//Check to see if it's loaded.
		if (this.images.has(name)) {
			return;
		}
		this.unloadedCount += 1;
		let sprite = new Image(AssetManager.TILE_SIZE, AssetManager.TILE_SIZE);
		sprite.onload = this.onImageLoaded.bind(this);
		sprite.src = src;
		this.images.set(name, sprite);
	}
	//#endregion

	//#region [yellow] Private
	private initImages(): void {
		this.loadImage(
			AssetManager.ROCK_IMAGE,
			require('@/assets/map/rock.png')
		);
		this.loadImage(
			AssetManager.COBBLE_IMAGE,
			require('@/assets/map/cobble.png')
		);
		this.loadImage(
			AssetManager.GRASS_IMAGE,
			require('@/assets/map/grass.png')
		);
	}
	private onImageLoaded(): void {
		this.unloadedCount -= 1;
	}
	//#endregion
}
export default AssetManager;
