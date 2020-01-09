//#region [white] Imports
import Tile from './Tile';
import Camera from './Camera';
import AssetManager from '../util/AssetManager';
//#endregion

class Screen {
	//#region [red] Constants
	//#endregion

	//#region [purple] Fields
	public camera: Camera;
	private context?: CanvasRenderingContext2D;
	//#endregion

	//#region [blue] Constructor
	constructor() {
		this.camera = new Camera();
	}
	//#endregion

	//#region [green] Public
	public begin(context: CanvasRenderingContext2D): void {
		this.context = context;
		this.context.clearRect(
			0,
			0,
			this.context.canvas.width,
			this.context.canvas.height
		);
	}

	public end(context: CanvasRenderingContext2D): void {
		this.context = undefined;
	}
	public renderTile(tile: Tile): void {
		if (this.context) {
			this.context.drawImage(
				tile.sprite,
				(tile.x * AssetManager.TILE_SIZE + this.camera.x) *
					this.camera.s,
				(tile.y * AssetManager.TILE_SIZE + this.camera.y) *
					this.camera.s,
				AssetManager.TILE_SIZE * this.camera.s,
				AssetManager.TILE_SIZE * this.camera.s
			);
		} else {
			console.log('[ Screen ] Begin has not been called yet this frame.');
		}
	}
	//#endregion

	//#region [yellow] Private
	//#endregion
}
export default Screen;
