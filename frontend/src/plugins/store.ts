import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import IStore from '@/ts/interfaces/IStore';
import { getDefaultMap } from '@/ts/interfaces/IMap';
import { getDefaultCampaign } from '@/ts/interfaces/ICampaign';
import TileRegistry from '@/ts/util/TileRegistry';
import axios from 'axios';
import Screenshot from '@/ts/util/Screenshot';
import { getDefaultUser } from '@/ts/interfaces/IUser';
import { v1 as uuidV1 } from 'uuid';

Vue.use(Vuex);
let tileRegistry = new TileRegistry();
let assetRegistry = new TileRegistry();
tileRegistry.init('/requestTiles');
assetRegistry.init('/requestAssets');
Screenshot.Init();

export default new Store<IStore>({
	state: {
		welcomeMessage: false,
		currentMap: getDefaultMap(),
		currentCampaign: getDefaultCampaign(),
		currentUser: getDefaultUser(),
		tiles: tileRegistry,
		assets: assetRegistry,
		selectedTile: 0,
		editingTiles: false,
		selectedAsset: 0,
		editingAssets: false
	},
	mutations: {},
	actions: {
		renameMap(context) {
			const store: IStore = context.state;
			const map = store.currentMap;
			axios.post('/saveMap', {
				map: map
			});
		},
		saveMap(context) {
			const store: IStore = context.state;
			console.log(`[ Store ] Saving map ${store.currentMap.name}.`);

			const map = store.currentMap;
			const tiles = store.tiles;
			const thumbnail = Screenshot.CreateThumbnail(200, 200, map, tiles);

			map.thumbnail = thumbnail;
			map.campaign = store.currentCampaign.id;

			axios.post('/saveMap', {
				map: map
			});
		},
		duplicateMap(context) {
			const store: IStore = context.state;
			console.log(
				`[ Store ] Duplicating current map ${store.currentMap.name}.`
			);
			const map = store.currentMap;
			map.name = `Copy of ${map.name}`;
			map.id = uuidV1();
			map.campaign = store.currentCampaign.id;
		}
	},
	modules: {}
});
