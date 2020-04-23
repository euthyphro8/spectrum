<template>
	<div class="home">
		<div class="master-selection" @click="onSelection('master')">
			<h1>Game Master</h1>
		</div>
		<div class="player-selection" @click="onSelection('player')">
			<h1>Player</h1>
		</div>
		<div class="spectator-selection" @click="onSelection('spectator')">
			<h1>Spectator</h1>
		</div>
		<DialogueBox
			:title="'Welcome'"
			:message="
				'Spectrum is currently in alpha. Expect things to break or not work in the first place. ' +
					'If you have any suggestions or feedback feel free to email ' +
					'joshhess13@gmail.com.'
			"
			:hidden="showDialogue"
			@confirmed="onDialogue"
		/>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import DialogueBox from '../components/DialogueBox.vue';
	import IStore from '../ts/interfaces/IStore';
	@Component({
		name: 'Home',
		components: {
			DialogueBox
		}
	})
	export default class Home extends Vue {
		private showDialogue = false;

		mounted(): void {
			this.showDialogue = this.$store.state.welcomeMessage;
		}

		onDialogue(): void {
			this.$store.state.welcomeMessage = true;
			this.showDialogue = true;
		}

		onSelection(role: string) {
			const store: IStore = this.$store.state;
			store.sessionRole = role;
			if (role === 'master') this.$router.push('/selection');
			if (role === 'player') this.$router.push('/session');
			if (role === 'spectator') this.$router.push('/session');
		}
	}
</script>

<style scoped>
	.home {
		background-color: #1e1e1e;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
	.master-selection {
		background-color: #222222;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.player-selection {
		background-color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.spectator-selection {
		background-color: #444444;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.home > div:hover {
		background-color: #777777;
	}
	h1 {
		color: #cccccc;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-weight: 100;
		font-size: 1.3em;
	}
</style>
