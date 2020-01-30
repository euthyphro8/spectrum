export default interface IMap {
	discriminator: 'spectrum.map';
	id: string;
	thumbnail: string;
	name: string;
	width: number;
	height: number;
	tiles: number[];
}

export function instanceOfIMap(object: any): object is IMap {
	return object.discriminator === 'spectrum.map';
}
