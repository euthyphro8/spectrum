<template>
	<div class="asset-bar"></div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		name: 'AssetBar',
		components: {}
	})
	export default class AssetBar extends Vue {}
</script>

<style scoped>
	.tile-bar {
		background-color: red;
	}
</style>
