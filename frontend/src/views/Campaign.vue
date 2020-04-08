<template>
	<div class="master">
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
					v-for="template in templates"
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
					v-for="map in maps"
					:key="map.id"
					:title="map.name"
					:thumbnail="map.thumbnail"
					@load="load(map)"
				/>
			</div>
		</div>
	</div>
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

	@Component({
		components: {
			InfoBar,
			MapCard,
			TemplateCard
		}
	})
	export default class Campaign extends Vue {
		@Prop({
			default: {
				id: 'f091e44b-ae8b-41d3-8c3d-715ab75c8b9f',
				name: 'Test Campaign',
				user: 'TestUser'
			}
		})
		private get campaign(): ICampaign {
			const store: Store<IStore> = this.$store;
			return store.state.currentCampaign;
		}
		private templates: IMap[] = [];
		private maps: IMap[] = [];

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
