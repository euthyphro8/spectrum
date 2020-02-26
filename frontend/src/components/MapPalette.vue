<template>
	<div class="palette" :class="{ top: onTop, left: !onTop }">
		<div class="tile" v-for="sprite in sprites" :key="sprite">
			<img
				:src="$store.state.assets.images.get(sprite).src"
				:alt="sprite"
				@click="onClick($event, sprite)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import { Store } from 'vuex';
	import IStore from '../ts/interfaces/IStore';

	@Component({
		name: 'MapPalette',
		components: {}
	})
	export default class MapPalette extends Vue {
		@Prop({ default: true })
		public onTop!: boolean;
		public sprites: string[] = [];

		mounted(): void {
			const store: Store<IStore> = this.$store;
			// this.sprites = [...store.state.tiles.images.keys()];
		}

		onClick(event: MouseEvent, name: string): void {
			const store: Store<IStore> = this.$store;
			// store.state.selected = name;
		}
	}
</script>

<style scoped>
	.palette {
		background-color: #3d3d3d;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
	}
	.left {
		width: 140px;
		flex-direction: column;
	}
	.top {
		height: 140px;
		flex-direction: row;
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
