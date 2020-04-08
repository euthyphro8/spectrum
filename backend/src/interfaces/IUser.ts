export default interface IUser {
	discriminator: 'spectrum.user';
	id: string;
	name: string;
	email: string;
	password: string;
	dateJoined: Date;
}

export function instanceOfIUser(object: any): object is IUser {
	return object.discriminator === 'spectrum.user';
}

export function getDefaultUser(): IUser {
	return {
		discriminator: 'spectrum.user',
		id: 'f06fa64c-c947-4a4e-9700-2cbcd55b27e3',
		name: 'SampleUser',
		email: 'sampleuser@gmail.com',
		password: 'hash',
		dateJoined: new Date(1577862000000) //Wed Jan 01 2020 00:00:00 GMT-0700
	};
}
