<template>
	<div class="session-bar">
		<div class="title">- SESSION -</div>
		<div class="button" @click="onCreate()">Create</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import IStore from '../../ts/interfaces/IStore';
	import axios from 'axios';

	@Component({
		name: 'SessionBar',
		components: {}
	})
	export default class SessionBar extends Vue {
		mounted(): void {}

		onCreate(): void {
			// Creating a session from a map assumes it should be saved.
			this.$store.dispatch('saveMap');

			const store: IStore = this.$store.state;
			axios
				.get('/createSession', {
					params: {
						userId: store.currentUser.id,
						mapId: store.currentMap.id
					}
				})
				.then((res) => {
					if (res.data && res.data.session) {
						store.currentSession = res.data.session;
						this.$router.push('/viewer');
					}
				});
		}
	}
</script>

<style scoped>
	.session-bar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.title {
		margin-top: 23px;
		margin-bottom: 16px;
		height: auto;
		color: #999999;
		font-size: 18px;
		letter-spacing: 4px;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.button {
		height: 72px;
		width: 182px;
		margin: 4px;
		background-color: #3c3c3c;
		color: #818181;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 20px;
	}
	.button:hover {
		background-color: #666666;
		color: #ffffff;
	}
</style>
