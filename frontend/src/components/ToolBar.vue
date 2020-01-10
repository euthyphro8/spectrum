<template>
	<div class="side-bar" :class="{ top: onTop, left: !onTop}">
		<div class="control-panel">
			
		</div>
		<div class="tile-palette">

		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';

	@Component({
		name: 'ToolBar',
		components: {}
	})
	export default class ToolBar extends Vue {
		@Prop()
		private onTop!: boolean;
	}
</script>

<style scoped>
	.side-bar {
		background-color: #3d3d3d;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
	}
	.left {
		width: 10%;
		flex-direction: column;
	}
	.top {
		height: 10%;
		flex-direction: row;
	}
	.control-panel {
		background-color: #2c2c2c;
	}
	.control-panel {
		background-color: #2c2c2c;
	}
</style>
