export default interface ICampaign {
	discriminator: 'spectrum.campaign';
	id: string;
	name: string;
	user: string;
	description: string;
	dateModified: Date;
}

export function instanceOfICampaign(object: any): object is ICampaign {
	return object.discriminator === 'spectrum.campaign';
}

export function getDefaultCampaign(): ICampaign {
	return {
		id: 'ce9116b1-bad9-4469-b67f-b770eb6db1d1',
		discriminator: 'spectrum.campaign',
		name: 'Sample Campaign',
		user: 'SampleUser',
		description: 'This is a sample campaign.',
		dateModified: new Date(1577862000000) //Wed Jan 01 2020 00:00:00 GMT-0700
	};
}
