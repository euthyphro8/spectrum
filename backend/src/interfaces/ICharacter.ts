export default interface ICharacter {
	discriminator: 'spectrum.character';
	id: string;
	name: string;
	x: number;
	y: number;
	entityId: number;
	user: string;
	playable: boolean;
}

export function instanceOfICharacter(object: any): object is ICharacter {
	return object.discriminator === 'spectrum.character';
}

export function getDefaultCharacter(): ICharacter {
	return {
		discriminator: 'spectrum.character',
		id: '0db32970-247d-4024-a3d3-36af02421e76',
		name: 'Sample Character',
		x: 0,
		y: 0,
		entityId: 0,
		user: 'f06fa64c-c947-4a4e-9700-2cbcd55b27e3',
		playable: true,
	};
}
