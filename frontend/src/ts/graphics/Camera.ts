//#region [white] Imports
//#endregion

class Camera {
	//#region [purple] Fields
	public x: number;
	public y: number;
	public s: number;
	//#endregion

	//#region [blue] Constructor
	constructor() {
		this.x = 0;
		this.y = 0;
		this.s = 1;
	}
	//#endregion

	//#region [green] Public
	public move(x: number, y: number): void {
		this.x += x / this.s;
		this.y += y / this.s;
	}

	public zoom(s: number): void {
		this.s += s;
		if (this.s < 0.5) this.s = 0.5;
		else if (this.s > 10) this.s = 10;
	}
	//#endregion

	//#region [yellow] Private
	//#endregion

}
export default Camera;
