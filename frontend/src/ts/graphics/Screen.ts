//#region [white] Imports
import Tile from './Tile';
import Camera from './Camera';
import AssetManager from '../util/AssetManager';
import Vector2 from '../interfaces/Vector2';
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

	public renderTileOutline(x: number, y: number): Vector2 {
		const outlineIndex = new Vector2(0, 0);
		if (this.context) {
			this.context.rect(
				x,
				y,
				AssetManager.TILE_SIZE * this.camera.s,
				AssetManager.TILE_SIZE * this.camera.s
			);
		} else {
			console.log('[ Screen ] Begin has not been called yet this frame.');
		}
		return outlineIndex;
	}

	/**
	 *
	 * @param v Return strictly for chaining options. Does mutate the vector.
	 */
	public screenToWorldSpace(v: Vector2): Vector2 {
		return v.divide(this.camera.s).sub(this.camera.x, this.camera.y);
	}

	public worldToScreenSpace(v: Vector2): Vector2 {
		return v.divide(this.camera.s).sub(this.camera.x, this.camera.y);
	}

	public screenToIndexSpace(v: Vector2): Vector2 {
		return v
			.divide(this.camera.s)
			.sub(this.camera.x, this.camera.y)
			.floorDivide(AssetManager.TILE_SIZE);
	}

	public indexToScreenSpace(v: Vector2): Vector2 {
		return v
			.multiply(AssetManager.TILE_SIZE)
			.add(this.camera.x, this.camera.y)
			.multiply(this.camera.s);
	}
	//#endregion

	//#region [yellow] Private
	//#endregion
}
export default Screen;
