<template>
	<div class="master">
		<InfoBar :title="'Maps'" :subtitle="'Example Campaign'" />
		<div class="content">
			<div class="template-header">
				<h1>Start a new map</h1>
			</div>
			<div class="templates">
				<SmallMapCard :title="'New Map'" />
			</div>
			<div class="body-header">
				<h1>Recent maps</h1>
			</div>
			<div class="body">
				<MapCard />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import InfoBar from '../components/master/InfoBar.vue';
	import MapCard from '../components/master/MapCard.vue';
	import SmallMapCard from '../components/master/SmallMapCard.vue';
	@Component({
		name: 'Master',
		components: {
			InfoBar,
			MapCard,
			SmallMapCard
		}
	})
	export default class Master extends Vue {

		private requestMaps(): void {

		}

		private requestTemplates(): void {
			
		}

	}
</script>

<style scoped>
	.master {
		background-color: #222222;
	}
	.content {
		overflow-y: auto;
		height: calc(100% - 48px);
	}
	.template-header {
		background-color: #1e1e1e;
		height: auto;
		width: auto;
		display: flex;
		padding: 20px 80px;
	}
	.templates {
		background-color: #1e1e1e;
		height: auto;
		padding: 20px 80px;
		padding-top: 0px;
	}
	.body-header {
		height: 48px;
		width: auto;
		display: flex;
		padding: 40px 80px;
	}
	.body {
		padding: 10px 80px;
		width: auto;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	h1 {
		width: auto;
		height: auto;
		font-size: 1em;
		font-weight: 100;
		letter-spacing: 0.06em;
		color: #cccccc;
	}
</style>
