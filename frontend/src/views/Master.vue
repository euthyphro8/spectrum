<template>
	<div class="master">
		<InfoBar :title="'Maps'" :subtitle="'Example Campaign'" />
		<div class="content">
			<div class="template-header">
				<h1>Start a new map</h1>
			</div>
			<div class="templates">
				<TemplateCard
					v-for="template in templates"
					:key="template"
					:title="template"
					@load="loadTemplate(template)"
				/>
			</div>
			<div class="body-header">
				<h1>Recent maps</h1>
			</div>
			<div class="body">
				<MapCard
					v-for="map in maps"
					:key="map"
					:title="map"
					@load="loadMap(map)"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import InfoBar from '../components/master/InfoBar.vue';
	import MapCard from '../components/master/MapCard.vue';
	import TemplateCard from '../components/master/TemplateCard.vue';
	import axios from 'axios';
	@Component({
		name: 'Master',
		components: {
			InfoBar,
			MapCard,
			TemplateCard
		}
	})
	export default class Master extends Vue {
		private templates: string[] = [];
		private maps: string[] = [];
		mounted(): void {
			this.templates.push('New Map');
			this.maps.push('Dungeon');
		}

		private async requestMaps(groupId: string): Promise<void> {
			try {
				console.log(`[ Master ] Requesting maps for group ${groupId}.`);
				let res = await axios.get('requestMaps');
				if (res.data && res.data.templates) {
					this.templates = res.data.templates;
				}
			} catch (error) {}
		}
		private async loadMap(groupId: string, map: string): Promise<void> {
			try {
				console.log(
					`[ Master ] Got load ${map} map request for ${groupId}.`
				);
				let res = await axios.get('loadMap');
				if (res.data && res.data.templates) {
					this.templates = res.data.templates;
				}
			} catch (error) {}
		}

		private async requestTemplates(): Promise<void> {
			try {
				console.log(`[ Master ] Got request templates.`);
				let res = await axios.get('requestTemplates');
				if (res.data && res.data.templates) {
					this.templates = res.data.templates;
				}
			} catch (error) {}
		}
		private async loadTemplate(template: string): Promise<void> {
			try {
				console.log(
					`[ Master ] Got load template request for ${template}.`
				);
				let res = await axios.get('loadTemplate');
				if (res.data && res.data.templates) {
					this.templates = res.data.templates;
				}
			} catch (error) {}
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
		width: calc(100% - 160px);
		height: auto;
		width: auto;
		padding: 20px 80px;
		padding-top: 0;

		display: flex;
		flex-direction: row;
		overflow-x: auto;
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
