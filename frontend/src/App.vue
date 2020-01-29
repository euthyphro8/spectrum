<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		components: {}
	})
	export default class App extends Vue {}
</script>

<style>
	* {
		overflow: hidden;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
