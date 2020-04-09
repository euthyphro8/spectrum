<template>
	<div class="file-bar">
		<div class="title">- FILE -</div>
		<v-text-field
			color="primary"
			class="mx-2"
			v-model="mapName"
			filled
			dense
			@change="onNameChanged"
		></v-text-field>
		<div class="button">New</div>
		<div class="button" @click="onSave()">Save</div>
		<div class="button">Duplicate</div>
		<div class="button">Load</div>
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
		private mapName: string;

		mounted(): void {
			const state: IStore = this.$store.state;
			this.mapName = state.currentMap.name;
		}
		onSave(): void {
			console.log(`Saving map as: ${this.mapName}.`);
			// this.$store.dispatch('saveMap');
		}
		onNameChanged(): void {
			console.log(`Changing name to: ${this.mapName}.`);
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
</style>
