//#region [white] Imports
import Tile from './Tile';
import Camera from './Camera';
import Vector2 from '../interfaces/Vector2';
//#endregion

export default class Screen {
	//#region [red] Constants
	public static readonly TILE_SIZE = 64;
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
				(tile.x * Screen.TILE_SIZE + this.camera.x) * this.camera.s,
				(tile.y * Screen.TILE_SIZE + this.camera.y) * this.camera.s,
				Screen.TILE_SIZE * this.camera.s,
				Screen.TILE_SIZE * this.camera.s
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
				Screen.TILE_SIZE * this.camera.s,
				Screen.TILE_SIZE * this.camera.s
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
			.floorDivide(Screen.TILE_SIZE);
	}

	public indexToScreenSpace(v: Vector2): Vector2 {
		return v
			.multiply(Screen.TILE_SIZE)
			.add(this.camera.x, this.camera.y)
			.multiply(this.camera.s);
	}
	//#endregion

	//#region [yellow] Private
	//#endregion
}
