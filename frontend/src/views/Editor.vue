<template>
	<div class="editor">
		<MapCanvas :editable="true" />
		<TabBar />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from '../components/MapCanvas.vue';
	import TabBar from '../components/editor/TabBar.vue';
	@Component({
		name: 'Editor',
		components: {
			MapCanvas,
			TabBar
		}
	})
	export default class Editor extends Vue {}
</script>

<style scoped>
	.editor {
		overflow: hidden;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
