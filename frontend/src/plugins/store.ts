import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import IStore from '@/ts/interfaces/IStore';
import { getDefaultMap } from '@/ts/interfaces/IMap';
import { getDefaultCampaign } from '@/ts/interfaces/ICampaign';
import TileRegistry from '@/ts/util/TileRegistry';
import axios from 'axios';
import Screenshot from '@/ts/util/Screenshot';
import { getDefaultUser } from '@/ts/interfaces/IUser';

Vue.use(Vuex);
let registry = new TileRegistry();
registry.init();

export default new Store<IStore>({
	state: {
		welcomeMessage: false,
		currentMap: getDefaultMap(),
		currentCampaign: getDefaultCampaign(),
		currentUser: getDefaultUser(),
		tiles: registry,
		selected: 0
	},
	mutations: {},
	actions: {
		// loadCampaign(context, campaign: ICampaign) {
		// 	console.log(`[ Store ] Loading campaign ${campaign.name}.`);
		// 	context.state.currentCampaign = campaign;
		// },
		saveMap(context) {
			console.log(
				`[ Store ] Saving map ${context.state.currentMap.name}.`
			);
			const map = context.state.currentMap;
			const tiles = context.state.tiles;
			const thumbnail = Screenshot.CreateThumbnail(200, 200, map, tiles);

			map.thumbnail = thumbnail;

			axios.post('/saveMap', {
				map: map
			});
		}
	},
	modules: {}
});
