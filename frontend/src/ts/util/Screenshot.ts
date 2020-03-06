import IMap, { coordToTileId } from '../interfaces/IMap';
import TileRegistry from './TileRegistry';
import Screen from '../graphics/Screen';

export default class Screenshot {
	public static Canvas: HTMLCanvasElement;
	public static CreateThumbnail(
		w: number,
		h: number,
		map: IMap,
		registry: TileRegistry
	): string {
		if (!Screenshot.Canvas) {
			Screenshot.Canvas = document.createElement('canvas');
		}
		Screenshot.Canvas.width = w;
		Screenshot.Canvas.height = h;
		const context = Screenshot.Canvas.getContext('2d');
		if (context) {
			// Draw all tiles scaled to the size of the thumbnail
			const xs = w / map.width;
			const ys = h / map.height;
			for (let y = 0; y < map.height; y++) {
				for (let x = 0; x < map.width; x++) {
					const id = coordToTileId(map, x, y);
					const sprite = registry.getImage(id);
					context.drawImage(sprite, xs * x, ys * y, xs, ys);
				}
			}
			return Screenshot.Canvas.toDataURL();
		}
		return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATWVroAAAAenRSTlMAAQIDBAUGBwgJCwwNDxAREhQVFhcZGhseHyAhIiUmJygtLzA1Nzg9P0FGSEpQUlRbXF9lZ2hqbnFzdXZ8foCDiYqMjo+VlpecoKKpq62us7W3uL2+wMPHyczP0NHU1dbY3N3e4OLj5Obo6ert7u/y8/X29/n6+/z9/l5G4FoAAAInSURBVHja7dxXVxRBEIbhWlfEJRhACYJiQEAFBCQZAROyJhQURdRdSSaQpLj167mnLmUGqny/H1A9z/Q53VOn57TInub0J000klIaixoCcm5RQ0AufNMQkNafGgLS/ktDQK6uawhI15aGgPT80RCQG381BGRYNQTkrsaAjGkISOaRhoBkJxIeMiVI2TMNATk6qSEgldMaAnJsRkNAamY1BKTus4aAnPmiISAtS7ufvOQScvG7mYIBj5DLK8YxJA4hHWvGcUscQq5tGMcdcQjptu35iDiE9G4bx6g4hPSXjOOhOITctFvfY3EIuWcdTzIOIfetI39I3EEy49bxNCvuINm8dbw4LO4gR55bx8sycQfJvbKO1+XiDlL1xjqmcuIOcvyddbytEHeQ2jnrmKkSd5D6gnW8rxZ3kOZ56/hwQtxBzi9bx8eT4g5y6Yd1FE6JO0jbqnUU68Qd5Iptz3WhQdxBOjetY6lJ3EGu/7aOr2fFHaRve/8Pyfai6mBJQ0BuH4hjy3+vOqIxIA80CESBAAECBAgQIKn9JwUECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAOaBvAggQIECAAAECBAgQIECAAPl/IYmOBQQIECBAgAABAgQIECBAgAAB4hCyD5cqAQECBAgQIECAAAHCZzwQIECAAAECBAgQIECcQJJthYAAAQLEFyTFtR0IECBAgJDY2QGtwG+USmY7swAAAABJRU5ErkJggg==';
	}
}
