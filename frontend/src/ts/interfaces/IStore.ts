import IMap from './IMap';
import TileRegistry from '../util/TileRegistry';
import ICampaign from './ICampaign';
import IUser from './IUser';

interface IStore {
	welcomeMessage: boolean;
	currentUser: IUser;
	currentMap: IMap;
	currentCampaign: ICampaign;
	tiles: TileRegistry;
	assets: TileRegistry;
	editingTiles: boolean;
	selectedTile: number;
	editingAssets: boolean;
	selectedAsset: number;
}
export default IStore;
