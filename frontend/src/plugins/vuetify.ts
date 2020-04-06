import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdiSvg'
	},
	theme: {
		dark: true,
		themes: {
			light: {
				primary: '#cccccc',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			},
			dark: {
				primary: '#333333',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			}
		}
	}
});
