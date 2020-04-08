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
	selected: number;
}
export default IStore;
