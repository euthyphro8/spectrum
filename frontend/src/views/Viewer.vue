<template>
	<v-content>
		<MapCanvas :editable="false" />
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import MapCanvas from '../components/MapCanvas.vue';
	@Component({
		components: {
			MapCanvas
		}
	})
	export default class Viewer extends Vue {}
</script>

<style scoped></style>
