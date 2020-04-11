<template>
	<v-app id="spectrum" class="overflow-hidden">
		<router-view />
		<div id="version">Alpha</div>
	</v-app>
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
	#spectrum {
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		overflow: hidden;
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
