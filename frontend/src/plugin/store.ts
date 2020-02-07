import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import AssetManager from '@/ts/util/AssetManager';
import IStore from '@/ts/interfaces/IStore';
import { getDefault } from '@/ts/interfaces/IMap';

Vue.use(Vuex);

export default new Store<IStore>({
	state: {
		currentMap: getDefault(),
		assets: new AssetManager(),
		selected: ''
	},
	mutations: {},
	actions: {},
	modules: {}
});
