import IMap from './IMap';
import TileRegistry from '../util/TileRegistry';

interface IStore {
	welcomeMessage: boolean;
	currentMap: IMap;
	tiles: TileRegistry;
	selected: number;
}
export default IStore;
