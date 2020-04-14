import axios from 'axios';
import ICharacter from '../interfaces/ICharacter';

export default class CharacterRegistry {
	public characters: Map<string, ICharacter[]>;

	constructor() {
		this.characters = new Map<string, ICharacter[]>();
	}

	public async cacheCharacters(campaignId: string): Promise<boolean> {
		console.log(
			`[ CharacterRegistry ] Requesting characters for campaign ${campaignId}.`
		);
		try {
			let res = await axios.get('/requestCharacters', {
				params: {
					campaignId: campaignId
				}
			});
			if (res.data && res.data.characters) {
				this.characters.set(campaignId, res.data.characters);
				return true;
			}
		} catch (error) {
			console.log(
				`[ CharacterRegistry ] Error getting characters:\ ${error}`
			);
		}
		return false;
	}

	public async validateCache(campaignId: string): Promise<ICharacter[]> {
		if (await this.cacheCharacters(campaignId)) {
			let characters = this.characters.get(campaignId);
			if (characters) return characters;
		}
		throw new Error(
			`[ CharacterRegistry ] Failed to load characters from ${campaignId}.`
		);
	}

	public async getCharacters(campaignId: string): Promise<ICharacter[]> {
		let characters = this.characters.get(campaignId);
		if (characters) return characters;
		else {
			if (await this.cacheCharacters(campaignId)) {
				characters = this.characters.get(campaignId);
				if (characters) return characters;
			}
		}
		throw new Error(
			`[ CharacterRegistry ] Failed to load characters from ${campaignId}.`
		);
	}
}
