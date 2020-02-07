<template>
	<div class="template-card" @click="$emit('load')">
		<div class="thumb">
			<img :src="thumbnail" :alt="title" />
		</div>
		<h1>{{ title }}</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'TemplateCard',
		components: {},
		props: {
			title: String,
			thumbnail: String
		}
	})
	export default class TemplateCard extends Vue {}
</script>

<style scoped>
	.template-card {
		width: 128px;
		height: 200px;
		flex-shrink: 0;
	}
	.template-card:hover {
		background-color: #cccccc;
	}
	.template-card:hover h1 {
		color: #1e1e1e;
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
		font-size: 1em;
		font-weight: 300;
		letter-spacing: 0.06em;
		color: #cccccc;
	}
	img {
		margin: 8px;
		width: calc(100% - 16px);
		height: calc(100% - 16px);
	}
</style>
