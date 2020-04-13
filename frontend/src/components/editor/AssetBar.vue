<template>
	<div class="scrollable">
		<div class="asset-bar">
			<div class="title">- ASSET -</div>
			<div
				class="asset"
				:class="{ highlighted: selectedIndex === id }"
				v-for="id in Array.from(assets().names.keys())"
				:key="id"
			>
				<img
					class="icon"
					:src="assets().getImage(id).src"
					:alt="assets().getName(id)"
					@click="onClick(id)"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import TileRegistry from '../../ts/util/TileRegistry';
	import IStore from '../../ts/interfaces/IStore';

	@Component({
		name: 'AssetBar',
		components: {}
	})
	export default class AssetBar extends Vue {
		private selectedIndex: number = -1;

		assets(): TileRegistry {
			return this.$store.state.assets;
		}

		onClick(tileId: number): void {
			const store: IStore = this.$store.state;
			store.selectedAsset = tileId;
			this.selectedIndex = tileId;
			console.log(`Selecting asset ${tileId}`);
		}
	}
</script>

<style scoped>
	.scrollable {
		overflow-y: auto;
		height: 100%;
	}
	.scrollable::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0.3);
		background-color: #555555;
		height: 100%;
	}

	.scrollable::-webkit-scrollbar {
		width: 10px;
		background-color: #555555;
		height: 100%;
	}

	.scrollable::-webkit-scrollbar-thumb {
		background-color: #1e1e1e;
		border: 2px solid #2d2d2d;
	}
	.asset-bar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: auto;
	}
	.asset {
		background-color: #2c2c2c;
		height: 128px;
		padding: 6px 6px;
		width: 128px;
	}
	.asset:hover {
		background-color: #e4f03d;
	}
	.icon {
		height: 100%;
		width: 100%;
	}
	.highlighted {
		background-color: #f5d41d;
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
</style>
