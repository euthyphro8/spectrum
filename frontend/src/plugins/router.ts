import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Master from '@/views/Master.vue';
import Player from '@/views/Player.vue';
import Spectator from '@/views/Spectator.vue';
import Editor from '@/views/Editor.vue';
import Selection from '@/views/Selection.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/selection',
			name: 'selection',
			component: Selection
		},
		{
			path: '/master',
			name: 'master',
			component: Master
		},
		{
			path: '/player',
			name: 'player',
			component: Player
		},
		{
			path: '/spectator',
			name: 'spectator',
			component: Spectator
		},
		{
			path: '/editor',
			name: 'editor',
			component: Editor
		}
	]
});
