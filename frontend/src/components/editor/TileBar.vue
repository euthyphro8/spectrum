<template>
	<div class="tile-bar"></div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		name: 'FileBar',
		components: {}
	})
	export default class TileBar extends Vue {}
</script>

<style scoped>
	.tile-bar {
		background-color: red;
	}
</style>
