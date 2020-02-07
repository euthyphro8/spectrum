import AssetManager from '../util/AssetManager';
import IMap from './IMap';

interface IStore {
	currentMap: IMap;
	assets: AssetManager;
	selected: string;
}
export default IStore;
