export default interface ISession {
	discriminator: 'spectrum.session';
	id: string;
	dm: string;
	players: string[];
	spectators: string[];
	playerCode: string;
	spectatorCode: string;
	map: string;
	dateCreated: number;
}

export function instanceOfISession(object: any): object is ISession {
	return object.discriminator === 'spectrum.session';
}
