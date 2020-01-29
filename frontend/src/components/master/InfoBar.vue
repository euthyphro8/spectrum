<template>
	<div class="info-bar">
		<h1 class="left">{{ title }}</h1>
		<div class="search">{{ search }}</div>
		<h1 class="right">{{ subtitle }}</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'InfoBar',
		components: {},
		props: {
			title: String,
			subtitle: String
		}
	})
	export default class InfoBar extends Vue {
		private search: String = 'Search';
	}
</script>

<style scoped>
	.info-bar {
		background-color: #333333;
		height: 48px;
		padding: 8px;
		display: flex;
		justify-content: space-between;
	}
	.search {
		background-color: #cccccc;
		max-width: 600px;
		height: 48px;
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1 {
		width: calc(50% - 300px);
		/* width: auto; */
		height: auto;
		font-size: 1.2em;
		font-weight: 300;
		letter-spacing: 0.06em;
		color: #cccccc;
		margin: 12px 24px;
	}
	.left {
		text-align: left;
	}
	.right {
		text-align: right;
	}
</style>
