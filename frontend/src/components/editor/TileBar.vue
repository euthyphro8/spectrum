<template>
	<div class="scrollable">
		<div class="tile-bar">
			<div
				class="tile"
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
	import { Store } from 'vuex';
	import IStore from '../../ts/interfaces/IStore';

	@Component({
		name: 'TileBar',
		components: {}
	})
	export default class TileBar extends Vue {
		tiles(): TileRegistry {
			return this.$store.state.tiles;
		}

		onClick(tileId: number): void {
			const store: Store<IStore> = this.$store;
			store.state.selected = tileId;
		}
	}
</script>

<style scoped>
	.scrollable {
		overflow-y: auto;
	}
	.scrollable::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0.3);
		background-color: #f5f5f5;
		height: 100%;
	}

	.scrollable::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
		height: 100%;
	}

	.scrollable::-webkit-scrollbar-thumb {
		background-color: #000000;
		border: 2px solid #555555;
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
</style>
