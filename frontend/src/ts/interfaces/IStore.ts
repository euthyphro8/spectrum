import IMap from './IMap';
import TileRegistry from '../util/TileRegistry';
import ICampaign from './ICampaign';
import IUser from './IUser';
import ICharacter from './ICharacter';
import CharacterRegistry from '../util/CharacterRegistry';

interface IStore {
	welcomeMessage: boolean;
	currentUser: IUser;
	currentMap: IMap;
	currentCampaign: ICampaign;
	characters: CharacterRegistry;
	assets: TileRegistry;
	entities: TileRegistry;
	tiles: TileRegistry;
	selectedCharacter: string;
	editingCharacters: boolean;
	editingTiles: boolean;
	selectedTile: number;
	editingAssets: boolean;
	selectedAsset: number;
}
export default IStore;
