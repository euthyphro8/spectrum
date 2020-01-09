<template>
	<div class="root">
		<MapCanvas />
		<MapPalette />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from './MapCanvs.vue';
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
		background-color: #1e1e1e;
	}
</style>
