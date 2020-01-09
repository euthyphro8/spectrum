class Map {
	private tile: HTMLImageElement;
	private ready: boolean;
	constructor() {
		this.ready = false;
		this.tile = new Image(64, 64);
		this.tile.src = require('@/assets/map/rock.png');

		this.tile.onload = () => {
			console.log('image loaded.');
			this.ready = true;
		};
	}

	update(dt: number) {}

	render(context: CanvasRenderingContext2D) {
		if (!this.ready) return;
		console.log('drawing on canvas');
		context.drawImage(this.tile, 0, 0);
	}
}
export default Map;
