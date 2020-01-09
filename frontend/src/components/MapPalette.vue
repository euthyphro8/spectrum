<template>
	<div class="palette">
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		name: 'MapPalette',
		components: {}
	})
	export default class MapPalette extends Vue {}
</script>

<style scoped>
	.palette {
		background-color: aqua;
		height: 100px;
		/* width: 100px; */
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
