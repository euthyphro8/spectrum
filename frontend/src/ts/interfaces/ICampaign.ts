export default interface ICampaign {
	discriminator: 'spectrum.campaign';
	id: string;
	name: string;
	user: string;
	dateModified: Date;
}

export function instanceOfICampaign(object: any): object is ICampaign {
	return object.discriminator === 'spectrum.campaign';
}
