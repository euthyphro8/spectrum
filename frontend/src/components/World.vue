<template>
	<div class="root">
		<canvas ref="world-canvas"></canvas>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Map from '@/ts/graphics/Map';
	@Component({
		name: 'World',
		components: {}
	})
	export default class World extends Vue {
		private map!: Map;
		private context!: CanvasRenderingContext2D;
		private requestId!: number;
		private lastTime!: number;

		mounted(): void {
			const canvas = this.$refs['world-canvas'] as HTMLCanvasElement;
			this.context = canvas.getContext('2d')!;
			this.map = new Map();
			this.lastTime = Date.now();
			this.requestId = requestAnimationFrame(this.tick.bind(this));
		}

		tick(time: number): void {
			const dt = time - this.lastTime;
			this.map.update(dt);
			this.lastTime = time;
			this.map.render(this.context);
			this.requestId = requestAnimationFrame(this.tick.bind(this));
		}
	}
</script>

<style scoped>
	.root {
		background-color: #1e1e1e;
	}
</style>
