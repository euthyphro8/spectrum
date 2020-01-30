export default interface ITemplate {
	discriminator: 'spectrum.template';
	id: string;
	thumbnail: string;
	name: string;
	width: number;
	height: number;
	tiles: number[];
}

export function instanceOfITemplate(object: any): object is ITemplate {
	return object.discriminator === 'spectrum.template';
}
