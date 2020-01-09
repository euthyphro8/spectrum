<template>
	<div class="root">
		<World />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import World from '../components/World.vue';
	@Component({
		name: 'Home',
		components: {
			World
		}
	})
	export default class Home extends Vue {}
</script>

<style scoped>
	.root {
		background-color: #1e1e1e;
	}
</style>
