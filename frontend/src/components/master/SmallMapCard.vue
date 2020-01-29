<template>
	<div class="small-map-card">
		<div class="thumb"></div>
		<h1>{{ title }}</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'SmallMapCard',
		components: {},
		props: {
			title: String
		}
	})
	export default class SmallMapCard extends Vue {}
</script>

<style scoped>
	.small-map-card {
		width: 208px;
		height: 248px;
	}
	.small-map-card:hover {
		background-color: #cccccc;
	}
	.small-map-card:hover h1 {
		color: #1e1e1e;
	}
	.thumb {
		background-color: #444444;
		width: 200px;
		height: 200px;
		margin: 4px;
	}
	h1 {
		padding: 8px;
		width: auto;
		height: auto;
		font-size: 1em;
		font-weight: 300;
		letter-spacing: 0.06em;
		color: #cccccc;
	}
</style>
