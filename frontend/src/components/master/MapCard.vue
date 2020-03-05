<template>
	<div class="map-card" @click="$emit('load')">
		<div class="thumb">
			<img :src="thumbnail" :alt="title" />
		</div>
		<h1>{{ title }}</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'MapCard',
		components: {},
		props: {
			title: String,
			thumbnail: String
		}
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
		width: calc(100% - 8px);
		height: calc(100% - 48px);
		margin: 4px;
	}
	h1 {
		padding: 8px;
		width: auto;
		height: auto;
		font-size: 1.1em;
		font-weight: 600;
		color: #bbbbbb;
	}
</style>
