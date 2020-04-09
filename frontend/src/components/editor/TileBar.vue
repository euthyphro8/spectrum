<template>
	<div class="scrollable">
		<div class="tile-bar">
			<div class="title">- TILE -</div>
			<div
				class="tile"
				:class="{ highlighted: selectedIndex === id }"
				v-for="id in Array.from(tiles().names.keys())"
				:key="id"
			>
				<img
					class="icon"
					:src="tiles().getImage(id).src"
					:alt="tiles().getName(id)"
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
		name: 'TileBar',
		components: {}
	})
	export default class TileBar extends Vue {
		private selectedIndex: number = -1;

		tiles(): TileRegistry {
			return this.$store.state.tiles;
		}

		onClick(tileId: number): void {
			const store: IStore = this.$store.state;
			store.selected = tileId;
			this.selectedIndex = tileId;
			console.log(`Selecting tile ${tileId}`);
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
	.tile-bar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: auto;
	}
	.tile {
		background-color: #2c2c2c;
		height: 128px;
		padding: 6px 6px;
		width: 128px;
	}
	.tile:hover {
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
