<template>
	<v-content>
		<v-system-bar
			color="#444444"
			@click="menuOpen = !menuOpen"
			:absolute="true"
			:height="menuOpen ? 512 : 24"
		>
			<span v-if="!menuOpen" class="subtitle ml-2"
				>Players ({{ players.length }})</span
			>
			<v-spacer v-if="!menuOpen" />
			<span v-if="!menuOpen" class="subtitle">{{ elapsedTime }}</span>
			<v-spacer v-if="!menuOpen" />
			<span v-if="!menuOpen" fclass="subtitle mr-2"
				>({{ spectators.length }}) Spectators</span
			>

			<div v-if="menuOpen" class="expanded-menu">
				<div class="main-col player-list">
					<h2>Players</h2>
					<div class="scroll">
						<div v-for="(p, i) in players" :key="i">
							{{ p }}
						</div>
					</div>
				</div>
				<div class="main-col status">
					<h1>Session Time</h1>
					<p>{{ elapsedTime }}</p>
					<h1>Session Code</h1>
					<p>{{ sessionCode }}</p>
				</div>
				<div class="main-col spectator-list">
					<h2>Spectators</h2>
					<div class="scroll">
						<div v-for="(p, i) in spectators" :key="i">
							{{ p }}
						</div>
					</div>
				</div>
			</div>
		</v-system-bar>
		<template v-if="session !== undefined">
			<MapCanvas :editable="false" />
		</template>
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from '../components/MapCanvas.vue';
	import IStore from '../ts/interfaces/IStore';
	import axios from 'axios';
	import IMap, { instanceOfIMap } from '../ts/interfaces/IMap';
	import ISession from '../ts/interfaces/ISession';
	@Component({
		components: {
			MapCanvas
		}
	})
	export default class Viewer extends Vue {
		private startTime: number = Date.now();
		private elapsedTime: string = '';
		private sessionCode: string = '';
		private session!: ISession;

		private players: string[] = [];
		private spectators: string[] = [];

		private menuOpen: boolean = false;

		private async created(): Promise<void> {
			const store: IStore = this.$store.state;
			const session = store.currentSession;
			if (session) {
				let map = await this.requestMap(session.map);
				if (map) {
					store.currentMap = map;
				} else {
					console.error('[ Viewer ] Unable to retrieve session map.');
					this.$router.back();
					return;
				}
				this.session = session;
				this.sessionCode = session.playerCode;
				this.players = session.players;
				this.spectators = session.spectators;
				this.startTime = session.dateCreated;
				setInterval(this.tick.bind(this), 1000);
			} else {
				console.error('[ Viewer ] No active session to join.');
				this.$router.back();
			}
		}

		private async requestMap(mapId: string): Promise<IMap | undefined> {
			console.log(`[ Viewer ] Requesting map ${mapId}.`);
			try {
				let res = await axios.get('/requestMap', {
					params: {
						mapId: mapId
					}
				});
				if (res.data && res.data.map) {
					let map = res.data.map;
					if (instanceOfIMap(map)) {
						console.log(`[ Viewer ] Got map from server.`);
						return map;
					}
				}
			} catch (error) {
				console.log(`[ Viewer ] Error:\ ${error}`);
			}
			return undefined;
		}

		tick(): void {
			this.elapsedTime = this.getElapsed();
			axios
				.get('/requestSession', {
					params: {
						sessionId: this.session.id
					}
				})
				.then((res) => {
					let store: IStore = this.$store.state;
					if (res && res.data) {
						if (res.data.session) {
							this.players = res.data.session.players;
							this.spectators = res.data.session.spectators;
						}
						if (res.data.characters) {
							store.characterCache = res.data.characters;
						}
					}
				});
		}

		private getElapsed(): string {
			const elapsed = (Date.now() - this.startTime) / 1000;
			let hours = Math.floor(elapsed / 3600);
			let minutes = Math.floor((elapsed - hours * 3600) / 60);
			let seconds = Math.floor(elapsed) - hours * 3600 - minutes * 60;

			return (
				(hours < 10 ? '0' + hours : hours) +
				':' +
				(minutes < 10 ? '0' + minutes : minutes) +
				':' +
				(seconds < 10 ? '0' + seconds : seconds)
			);
		}
	}
</script>

<style scoped>
	.scroll {
		overflow-y: auto;
		height: calc(100% - 16px);
		width: 100%;
	}
	.expanded-menu {
		height: 100%;
		width: 100%;
		background-color: #444444;
		display: flex;
		justify-content: space-between;
	}
	.main-col {
		margin: 8px 4px;
		padding: 8px 0px;
		background-color: #333333;
		height: calc(100%-16px);
	}
	.player-list {
		width: 25%;
	}
	.status {
		width: 50%;
	}
	.spectator-list {
		width: 25%;
	}
</style>
