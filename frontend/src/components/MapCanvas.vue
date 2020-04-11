<template>
	<div class="root">
		<canvas class="screen" ref="map-canvas"></canvas>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import MapManager from '../ts/graphics/MapManager';
	import IStore from '../ts/interfaces/IStore';

	@Component({
		name: 'MapCanvas',
		components: {}
	})
	export default class MapCanvas extends Vue {
		@Prop({ default: false })
		private editable!: boolean;
		private map!: MapManager;
		private context!: CanvasRenderingContext2D;
		private requestId!: number;
		private lastTime!: number;

		private mounted(): void {
			const canvas = this.$refs['map-canvas'] as HTMLCanvasElement;
			this.context = canvas.getContext('2d')!;

			this.context.canvas.width = this.context.canvas.clientWidth;
			this.context.canvas.height = this.context.canvas.clientHeight;
			window.addEventListener('resize', this.onResize.bind(this), {
				passive: true
			});
			this.map = new MapManager(this.$store.state, this.editable);

			this.lastTime = Date.now();
			this.requestId = requestAnimationFrame(this.tick.bind(this));
			this.register();
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

		protected register(): void {
			this.$el.addEventListener('mouseover', this.onFocus.bind(this), {
				passive: true
			});
			this.$el.addEventListener('mouseout', this.onBlur.bind(this), {
				passive: true
			});
		}

		protected unregister(): void {
			this.$el.removeEventListener('mouseover', this.onFocus.bind(this));
			this.$el.removeEventListener('mouseout', this.onBlur.bind(this));
		}

		private onFocus(): void {
			this.map.setFocus(true);
		}
		private onBlur(): void {
			this.map.setFocus(false);
		}
	}
</script>

<style scoped>
	.root {
		background-color: #1e1e1e;
		overflow: hidden;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.screen {
		overflow: hidden;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
