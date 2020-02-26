<template>
	<div class="tile-bar">
		<div
			class="tile"
			v-for="id in Array.from(tiles().names.keys())"
			:key="id"
		>
			<img
				:src="tiles().getImage(id).src"
				:alt="tiles().getName(id)"
				@click="onClick(id)"
			/>
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
	.tile-bar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
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
</style>
