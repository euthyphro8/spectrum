<template>
	<div class="spectator"></div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'Spectator',
		components: {}
	})
	export default class Spectator extends Vue {}
</script>

<style scoped>
	.spectator {
		background-color: #444444;
	}
</style>
