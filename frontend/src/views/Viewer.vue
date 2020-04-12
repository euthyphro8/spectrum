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
		<MapCanvas :editable="false" />
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from '../components/MapCanvas.vue';
	@Component({
		components: {
			MapCanvas
		}
	})
	export default class Viewer extends Vue {
		private startTime: number = Date.now();
		private elapsedTime: string = '';
		private sessionCode: string = 'A8X3';

		private players = ['Trevor', 'Reece', 'Rama', 'Aidan'];
		private spectators = [
			'xxxpussyslayer69xxx',
			'holyfuckthat42_',
			'sugardredaddy4420'
		];

		private menuOpen: boolean = false;

		private created(): void {
			setInterval(() => {
				this.elapsedTime = this.getElapsed();
			}, 1000);
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
