<template>
	<div class="root">
		<canvas ref="map-canvas"></canvas>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Map from '../ts/graphics/Map';

	@Component({
		name: 'MapCanvas',
		components: {}
	})
	export default class MapCanvas extends Vue {
		private map!: Map;
		private context!: CanvasRenderingContext2D;
		private requestId!: number;
		private lastTime!: number;

		private mounted(): void {
			const canvas = this.$refs['map-canvas'] as HTMLCanvasElement;
			this.context = canvas.getContext('2d')!;
			
			this.context.canvas.width = this.context.canvas.clientWidth;
			this.context.canvas.height = this.context.canvas.clientHeight;
			window.addEventListener('resize', this.onResize.bind(this), { passive: true });
			this.map = new Map(this.$store);
			
			this.lastTime = Date.now();
			this.requestId = requestAnimationFrame(this.tick.bind(this));
		}

		private tick(time: number): void {
			const dt = time - this.lastTime;
			this.map.update(dt);
			this.lastTime = time;
			this.map.render(this.context);
			this.requestId = requestAnimationFrame(this.tick.bind(this));
		}

		private onResize(event: UIEvent): void {
			this.context.canvas.width = this.context.canvas.clientWidth;
			this.context.canvas.height = this.context.canvas.clientHeight;
		}
	}
</script>

<style scoped>
	.root {
		background-color: #1e1e1e;
	}
</style>
