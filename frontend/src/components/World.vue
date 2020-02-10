<template>
	<div class="root">
		<MapCanvas />
		<MapPalette :onTop="true" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from './MapCanvas.vue';
	import MapPalette from './MapPalette.vue';
	@Component({
		name: 'World',
		components: {
			MapCanvas,
			MapPalette
		}
	})
	export default class World extends Vue {}
</script>

<style scoped>
	.root {
		background-color: #222222;
	}
</style>
