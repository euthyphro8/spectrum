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
		this.context.strokeStyle = '#e4f03d';
		this.context.lineWidth = 3;
		this.context.beginPath();
	}

	public end(): void {
		if (this.context) this.context.stroke();
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

	//TODO refactor the shit out of this.
	public renderTileOutline(x: number, y: number): { tx: number; ty: number } {
		if (this.context) {
			let tix = 0;
			let tx = x / this.camera.s;
			tx -= this.camera.x;
			tx = Math.floor(tx / AssetManager.TILE_SIZE);
			tix = tx;
			tx *= AssetManager.TILE_SIZE;
			tx += this.camera.x;
			tx *= this.camera.s;

			let tiy = 0;
			let ty = y / this.camera.s;
			ty -= this.camera.y;
			ty = Math.floor(ty / AssetManager.TILE_SIZE);
			tiy = ty;
			ty *= AssetManager.TILE_SIZE;
			ty += this.camera.y;
			ty *= this.camera.s;

			this.context.rect(
				tx,
				ty,
				AssetManager.TILE_SIZE * this.camera.s,
				AssetManager.TILE_SIZE * this.camera.s
			);
			this.context.rect(x, y, 16, 16);
			return { tx: tix, ty: tiy };
		} else {
			console.log('[ Screen ] Begin has not been called yet this frame.');
			return { tx: 0, ty: 0 };
		}
	}
	//#endregion

	//#region [yellow] Private
	//#endregion
}
export default Screen;
