export default interface IMap {
	discriminator: 'spectrum.map';
	id: string;
	name: string;
	campaign: string;
	dateModified: Date;
	thumbnail: string;
	width: number;
	height: number;
	assets: number[];
	tiles: number[];
}

export function instanceOfIMap(object: any): object is IMap {
	return object.discriminator === 'spectrum.map';
}

export function coordToTileId(map: IMap, x: number, y: number): number {
	return map.tiles[y * map.width + x];
}
export function coordToAssetId(map: IMap, x: number, y: number): number {
	return map.assets[y * map.width + x];
}

export function updateTileId(
	map: IMap,
	x: number,
	y: number,
	newId: number
): void {
	map.tiles[y * map.width + x] = newId;
}

export function getDefaultMap(): IMap {
	return {
		discriminator: 'spectrum.map',
		id: 'd10c2776-cc1b-402f-b87c-46da711c4da6',
		name: 'Sample Map',
		campaign: 'ce9116b1-bad9-4469-b67f-b770eb6db1d1',
		dateModified: new Date(1577862000000), //Wed Jan 01 2020 00:00:00 GMT-0700
		thumbnail:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATWVroAAAAenRSTlMAAQIDBAUGBwgJCwwNDxAREhQVFhcZGhseHyAhIiUmJygtLzA1Nzg9P0FGSEpQUlRbXF9lZ2hqbnFzdXZ8foCDiYqMjo+VlpecoKKpq62us7W3uL2+wMPHyczP0NHU1dbY3N3e4OLj5Obo6ert7u/y8/X29/n6+/z9/l5G4FoAAAInSURBVHja7dxXVxRBEIbhWlfEJRhACYJiQEAFBCQZAROyJhQURdRdSSaQpLj167mnLmUGqny/H1A9z/Q53VOn57TInub0J000klIaixoCcm5RQ0AufNMQkNafGgLS/ktDQK6uawhI15aGgPT80RCQG381BGRYNQTkrsaAjGkISOaRhoBkJxIeMiVI2TMNATk6qSEgldMaAnJsRkNAamY1BKTus4aAnPmiISAtS7ufvOQScvG7mYIBj5DLK8YxJA4hHWvGcUscQq5tGMcdcQjptu35iDiE9G4bx6g4hPSXjOOhOITctFvfY3EIuWcdTzIOIfetI39I3EEy49bxNCvuINm8dbw4LO4gR55bx8sycQfJvbKO1+XiDlL1xjqmcuIOcvyddbytEHeQ2jnrmKkSd5D6gnW8rxZ3kOZ56/hwQtxBzi9bx8eT4g5y6Yd1FE6JO0jbqnUU68Qd5Iptz3WhQdxBOjetY6lJ3EGu/7aOr2fFHaRve/8Pyfai6mBJQ0BuH4hjy3+vOqIxIA80CESBAAECBAgQIKn9JwUECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAOaBvAggQIECAAAECBAgQIECAAPl/IYmOBQQIECBAgAABAgQIECBAgAAB4hCyD5cqAQECBAgQIECAAAHCZzwQIECAAAECBAgQIECcQJJthYAAAQLEFyTFtR0IECBAgJDY2QGtwG+USmY7swAAAABJRU5ErkJggg==',
		height: 16,
		width: 16,
		// prettier-ignore
		assets: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		],
		// prettier-ignore
		tiles: [
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
		]
	};
}
