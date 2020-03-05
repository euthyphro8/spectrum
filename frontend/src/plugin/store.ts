import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import AssetManager from '@/ts/util/AssetManager';
import IStore from '@/ts/interfaces/IStore';
import { getDefault } from '@/ts/interfaces/IMap';
import TileRegistry from '@/ts/util/TileRegistry';
import axios from 'axios';

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
			axios.post('/saveMap', {
				map: context.state.currentMap
			});
		}
	},
	modules: {}
});
