export default interface ITile {
	discriminator: 'spectrum.tile';
	id: number;
	name: string;
	image: string;
}

export function instanceOfITile(object: any): object is ITile {
	return object.discriminator === 'spectrum.tile';
}
