export default interface ICharacter {
	discriminator: 'spectrum.character';
	id: string;
	name: string;
	entityId: number;
	campaign: string;
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
		entityId: 0,
		campaign: 'f06fa64c-c947-4a4e-9700-2cbcd55b27e3',
		playable: true
	};
}
