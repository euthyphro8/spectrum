<template>
	<div class="map-card">
		<div class="thumb"></div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'MapCard',
		components: {}
	})
	export default class MapCard extends Vue {}
</script>

<style scoped>
	.map-card {
		background-color: #777777;
		margin: 10px;
		width: 208px;
		height: 248px;
	}
	.map-card:hover {
		background-color: #cccccc;
	}
	.thumb {
		background-color: #444444;
		width: 200px;
		height: 200px;
		margin: 4px;
	}
</style>
