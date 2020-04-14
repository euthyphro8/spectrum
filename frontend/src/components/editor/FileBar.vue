<template>
	<div class="file-bar">
		<div class="title">- FILE -</div>
		<div class="button" @click="onNew()">New</div>
		<hr class="section" />
		<div class="container">
			<v-text-field
				color="primary"
				v-model="mapName"
				filled
				@change="onNameChanged"
			/>
		</div>
		<div class="button" @click="onSave()">Save</div>
		<hr class="section" />
		<div class="button" @click="onDuplicate()">Duplicate</div>
		<div class="button" @click="onLoad()">Load</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import IStore from '../../ts/interfaces/IStore';

	@Component({
		name: 'FileBar',
		components: {}
	})
	export default class FileBar extends Vue {
		private mapName: string = '';

		mounted(): void {
			const state: IStore = this.$store.state;
			this.mapName = state.currentMap.name;
		}

		onNameChanged(): void {
			console.log(`Changing name to: ${this.mapName}.`);
			const state: IStore = this.$store.state;
			state.currentMap.name = this.mapName;
			this.$store.dispatch('renameMap');
		}

		onNew(): void {
			console.log(`Loading a new map...`);
			this.$store.dispatch('newMap');
			this.$router.go(0);
		}

		onSave(): void {
			console.log(`Saving map as: ${this.mapName}.`);
			const state: IStore = this.$store.state;
			state.currentMap.name = this.mapName;
			this.$store.dispatch('saveMap');
		}

		onDuplicate(): void {
			console.log(`Duplicating map...`);
			this.$store.dispatch('duplicateMap');
			this.$store.dispatch('saveMap');
			const state: IStore = this.$store.state;
			this.mapName = state.currentMap.name;
		}

		onLoad(): void {
			console.log(`Going to loading screen...`);
			this.$router.push('/campaign');
		}
	}
</script>

<style scoped>
	.file-bar {
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
	.container {
		width: 182px;
		height: 72px;
		margin: 4px 2px -6px 2px;
		padding: 0px;
	}
	.section {
		width: 50%;
		margin: 32px 0px;
	}
</style>
