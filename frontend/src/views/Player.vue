<template>
	<div class="player"></div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'Player',
		components: {}
	})
	export default class Player extends Vue {}
</script>

<style scoped>
	.player {
		background-color: #333333;
	}
</style>
