<template>
	<div class="root">
		<MapCanvas />
		<MapPalette :onTop="false" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from '../components/MapCanvas.vue';
	import MapPalette from '../components/MapPalette.vue';
	@Component({
		name: 'Editor',
		components: {
			MapCanvas,
			MapPalette
		}
	})
	export default class Editor extends Vue {}
</script>

<style scoped>
	.root {
		background-color: #1e1e1e;
	}
</style>
