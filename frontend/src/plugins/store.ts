import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import IStore from '@/ts/interfaces/IStore';
import { getDefault } from '@/ts/interfaces/IMap';
import TileRegistry from '@/ts/util/TileRegistry';
import axios from 'axios';
import Screenshot from '@/ts/util/Screenshot';

Vue.use(Vuex);
let registry = new TileRegistry();
registry.init();

export default new Store<IStore>({
	state: {
		welcomeMessage: false,
		currentMap: getDefault(),
		tiles: registry,
		selected: 0
	},
	mutations: {},
	actions: {
		saveMap(context) {
			console.log('Saving map...');
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
