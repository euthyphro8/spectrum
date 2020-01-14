import Camera from './Camera';

//#region [white] Imports
//#endregion

class Controller {
	//#region [purple] Fields
	public mx: number;
	public my: number;

	private upPressed: boolean;
	private downPressed: boolean;
	private leftPressed: boolean;
	private rightPressed: boolean;
	private panPressed: boolean;
	private clickDown: boolean;
	private mdx: number;
	private mdy: number;
	private mlx: number;
	private mly: number;
	private ds: number;
	//#endregion

	//#region [blue] Constructor
	constructor() {
		this.upPressed = false;
		this.downPressed = false;
		this.leftPressed = false;
		this.rightPressed = false;
		this.panPressed = false;
		this.clickDown = false;
		this.mdx = 0;
		this.mdy = 0;
		this.mlx = 0;
		this.mly = 0;
		this.ds = 0;
		this.mx = 0;
		this.my = 0;
	}
	//#endregion

	//#region [green] Public
	public getClick(): boolean {
		// if (this.clickDown) {
		// 	this.clickDown = false;
		// 	return true;
		// }
		// return false;
		return this.clickDown;
	}

	public update(dt: number, camera: Camera): void {
		const speed = 5;
		let dx = this.leftPressed
			? this.rightPressed
				? 0
				: -speed
			: this.rightPressed
			? speed
			: 0;
		let dy = this.upPressed
			? this.downPressed
				? 0
				: -speed
			: this.downPressed
			? speed
			: 0;
		dx += this.mdx;
		dy += this.mdy;
		this.mdx = 0;
		this.mdy = 0;
		camera.move(-dx, -dy);

		camera.zoom(this.ds);
		this.ds = 0;
	}

	public registerEvents(): void {
		document.addEventListener('keydown', this.onKeyDown.bind(this), {
			passive: true
		});
		document.addEventListener('keyup', this.onKeyUp.bind(this), {
			passive: true
		});
		document.addEventListener('mousedown', this.onMouseDown.bind(this), {
			passive: true
		});
		document.addEventListener('mousemove', this.onMouseMove.bind(this), {
			passive: true
		});
		document.addEventListener('mouseup', this.onMouseUp.bind(this), {
			passive: true
		});
		document.addEventListener('wheel', this.onScroll.bind(this), {
			passive: true
		});
	}

	public unRegisterEvents(): void {
		document.removeEventListener('keydown', this.onKeyDown.bind(this));
		document.removeEventListener('keyup', this.onKeyUp.bind(this));
	}
	//#endregion

	//#region [yellow] Private
	private onKeyDown(event: KeyboardEvent): void {
		if (event.keyCode === 65 || event.keyCode === 37) {
			this.leftPressed = true;
		} else if (event.keyCode === 87 || event.keyCode === 38) {
			this.upPressed = true;
		} else if (event.keyCode === 83 || event.keyCode === 40) {
			this.downPressed = true;
		} else if (event.keyCode === 68 || event.keyCode === 39) {
			this.rightPressed = true;
		}
	}

	private onKeyUp(event: KeyboardEvent): void {
		if (event.keyCode === 65 || event.keyCode === 37) {
			this.leftPressed = false;
		} else if (event.keyCode === 87 || event.keyCode === 38) {
			this.upPressed = false;
		} else if (event.keyCode === 83 || event.keyCode === 40) {
			this.downPressed = false;
		} else if (event.keyCode === 68 || event.keyCode === 39) {
			this.rightPressed = false;
		}
	}

	private onMouseDown(event: MouseEvent): void {
		if (event.shiftKey || event.button === 1) {
			this.panPressed = true;
			this.mlx = event.screenX;
			this.mly = event.screenY;
		}
		this.clickDown = true;
	}

	private onMouseMove(event: MouseEvent): void {
		this.mx = event.clientX;
		this.my = event.clientY;
		if (this.panPressed) {
			this.mdx += this.mlx - event.screenX;
			this.mdy += this.mly - event.screenY;
			this.mlx = event.screenX;
			this.mly = event.screenY;
		}
	}

	private onMouseUp(event: MouseEvent): void {
		this.panPressed = false;
	}

	private onScroll(event: WheelEvent): void {
		// if (event.deltaY > 0) {
		// 	this.ds = 0.1;
		// } else if (event.deltaY < 0) {
		// 	this.ds = -0.1;
		// }
		this.ds -= event.deltaY / 1000;
	}
	//#endregion
}
export default Controller;
