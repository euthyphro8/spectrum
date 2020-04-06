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
			<span class="title mx-3">Campaigns</span>
			<v-btn class="mx-2" fab small>
				<v-icon>{{ mdiPlus }}</v-icon>
			</v-btn>
		</v-app-bar>
		<v-list v-if="sortedCampaigns().length > 0">
			<v-list-item
				v-for="c in sortedCampaigns()"
				:key="c.id"
				@click="onSelection(c)"
			>
				<v-list-item-avatar>
					<v-icon>{{ mdiSwordCross }}</v-icon>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title v-text="c.name"></v-list-item-title>
					<v-list-item-subtitle
						v-text="
							'This is the test campaign. A campaign full of fake adventurers and not real maps.'
						"
					></v-list-item-subtitle>
				</v-list-item-content>

				<v-list-item-action>
					<v-list-item-action-text
						v-text="getRecentDateTimeString(c.dateModified)"
					>
					</v-list-item-action-text>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-list v-else>
			<div class="my-4">- No Campaigns Here -</div>
		</v-list>
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { mdiInformation, mdiSwordCross, mdiPlus } from '@mdi/js';
	import ICampaign from '../ts/interfaces/ICampaign';
	import axios from 'axios';

	@Component({
		data: () => {
			return {
				mdiInformation,
				mdiSwordCross,
				mdiPlus
			};
		}
	})
	/**
	 * Campaign selection view, should arrive from Main View
	 * and lead to Campaign View upon selection.
	 */
	export default class Selection extends Vue {
		public campaigns: ICampaign[] = [
			{
				id: 'test',
				discriminator: 'spectrum.campaign',
				name: 'Test Campaign',
				user: 'TestUser',
				dateModified: new Date(Date.now())
			}
		];
		private searchTerm: string = '';

		private async mounted(): Promise<void> {
			this.requestCampaigns('TestUser').catch((error) => {
				console.log(`[ Selection ] Error:\ ${error}`);
			});
		}

		private async requestCampaigns(user: string): Promise<void> {
			console.log(`[ Selection ] Requesting campaigns for user ${user}.`);
			try {
				let res = await axios.get('/requestCampaigns', {
					params: {
						user: user
					}
				});
				if (res.data && res.data.campaigns) {
					this.campaigns = res.data.campaigns;
				}
			} catch (error) {
				console.log(`[ Selection ] Error:\ ${error}`);
			}
		}

		private sortedCampaigns() {
			return this.campaigns
				.filter((value: ICampaign) => {
					return value.name
						.toLowerCase()
						.startsWith(this.searchTerm.toLowerCase());
				})
				.sort((a: ICampaign, b: ICampaign) => {
					return a.dateModified.getTime() - b.dateModified.getTime();
				});
		}

		private getRecentDateTimeString(date: Date): string {
			let now = new Date(Date.now()).toLocaleDateString();
			return date.toLocaleDateString() === now
				? date.toLocaleTimeString()
				: date.toLocaleDateString();
		}

		private onSearch(input: any) {
			if (input) this.searchTerm = input;
			else this.searchTerm = '';
		}

		private onSelection(item: any) {
			//TODO Load campaign view
			console.log(`${item.title}`);
		}
	}
</script>

<style scoped></style>
