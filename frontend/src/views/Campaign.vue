<template>
	<v-content>
		<v-app-bar color="primary">
			<span class="title mx-3">Spectrum</span>
			<v-spacer />
			<v-text-field
				@input="onSearch"
				clearable
				solo-inverted
				hide-details
				label="Search"
			/>
			<v-spacer />
			<span class="title mx-3">{{ campaign.name }}</span>
		</v-app-bar>
		<div class="content">
			<div class="template-header">
				<h1>Start a new map</h1>
			</div>
			<div class="templates">
				<TemplateCard
					v-for="template in sortedTemplates()"
					:key="template.id"
					:title="template.name"
					:thumbnail="template.thumbnail"
					@load="load(template)"
				/>
			</div>
			<div class="body-header">
				<h1>Recent maps</h1>
			</div>
			<div class="body">
				<MapCard
					v-for="map in sortedMaps()"
					:key="map.id"
					:title="map.name"
					:thumbnail="map.thumbnail"
					@load="load(map)"
				/>
			</div>
		</div>
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import axios from 'axios';
	import InfoBar from '../components/master/InfoBar.vue';
	import MapCard from '../components/master/MapCard.vue';
	import TemplateCard from '../components/master/TemplateCard.vue';
	import ICampaign from '../ts/interfaces/ICampaign';
	import IMap from '../ts/interfaces/IMap';
	import IStore from '../ts/interfaces/IStore';
	import { Store } from 'vuex';
	import { getDefaultMap } from '../ts/interfaces/IMap';
	import { getDefaultCampaign } from '../../../Backend/src/interfaces/ICampaign';

	@Component({
		components: {
			InfoBar,
			MapCard,
			TemplateCard
		}
	})
	export default class Campaign extends Vue {
		private templates: IMap[] = [];
		private maps: IMap[] = [];
		private searchTerm: string = '';

		private get campaign(): ICampaign {
			const store: Store<IStore> = this.$store;
			return store.state.currentCampaign;
		}

		private onSearch(input: string): void {
			if (input) this.searchTerm = input;
			else this.searchTerm = '';
		}

		private async mounted(): Promise<void> {
			this.requestTemplates()
				.then(() => this.requestMaps(this.campaign.id))
				.catch((error) => {
					console.log(`[ Campaign ] Error:\ ${error}`);
				});
		}

		private async requestMaps(campaignId: string): Promise<void> {
			console.log(
				`[ Campaign ] Requesting maps for campaign ${campaignId}.`
			);
			try {
				let res = await axios.get('/requestMaps', {
					params: {
						campaignId: campaignId
					}
				});
				if (res.data && res.data.maps) {
					this.maps = res.data.maps;
					for (let m of this.maps) {
						m.dateModified = new Date(m.dateModified);
					}
				}
			} catch (error) {
				console.log(`[ Campaign ] Error:\ ${error}`);
				this.maps = [getDefaultMap()];
			}
		}

		private async requestTemplates(): Promise<void> {
			try {
				let res = await axios.get('/requestTemplates');
				console.log(
					`[ Campaign ] Got request templates. ${JSON.stringify(
						res.data
					)}`
				);
				if (res.data && res.data.templates) {
					this.templates = res.data.templates;
				}
			} catch (error) {
				console.log(`[ Campaign ] Error:\ ${error}`);
				this.templates = [getDefaultMap()];
			}
		}

		private load(map: IMap): void {
			console.log(
				`[ Campaign ] Got load template request for ${map.name}.`
			);
			this.$store.state.currentMap = map;
			this.$router.push('editor');
		}

		private sortedMaps(): IMap[] {
			return this.maps
				.filter((value: IMap) => {
					return value.name
						.toLowerCase()
						.startsWith(this.searchTerm.toLowerCase());
				})
				.sort((a: IMap, b: IMap) => {
					return b.dateModified.getTime() - a.dateModified.getTime();
				});
		}

		private sortedTemplates(): IMap[] {
			return this.templates
				.filter((value: IMap) => {
					return value.name
						.toLowerCase()
						.startsWith(this.searchTerm.toLowerCase());
				})
				.sort((a: IMap, b: IMap) => {
					return b.dateModified.getTime() - a.dateModified.getTime();
				});
		}
	}
</script>

<style scoped>
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
