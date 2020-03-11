<template>
	<div id="app">
		<v-app>
			<router-view />
			<div id="version">Alpha v0.1.8</div>
		</v-app>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		name: 'App',
		components: {}
	})
	export default class App extends Vue {}
</script>

<style>
	/* * {
		overflow: hidden;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	} */

	#app {
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#version {
		position: absolute;
		color: #999999;
		bottom: 10px;
		right: 10px;
		height: auto;
		width: auto;
		background-color: #1e1e1e88;
		padding: 6px 12px;
		border-radius: 6px;
	}
</style>
