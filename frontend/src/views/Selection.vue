<template>
	<v-content>
		<v-app-bar color="primary">
			<span class="title ml-4">Spectrum</span>
			<v-spacer />
			<v-text-field dense @input="onSearch" clearable solo-inverted hide-details label="Search" />
			<v-spacer />
			<span class="title mr-6">Campaigns</span>
			<v-btn class="mr-2" fab small @click="dialog = true">
				<v-icon>{{ mdiPlus }}</v-icon>
			</v-btn>
		</v-app-bar>
		<v-list v-if="sortedCampaigns().length > 0" :three-line="false">
			<v-list-item v-for="c in sortedCampaigns()" :key="c.id" @click="onSelection(c)">
				<v-list-item-avatar>
					<v-icon>{{ mdiSwordCross }}</v-icon>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title v-text="c.name"></v-list-item-title>
					<v-list-item-subtitle v-text="c.description"></v-list-item-subtitle>
				</v-list-item-content>

				<v-list-item-action>
					<v-list-item-action-text v-text="getRecentDateTimeString(c.dateModified)"></v-list-item-action-text>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-list v-else>
			<div class="my-4">- No Campaigns Here -</div>
		</v-list>
		<v-row justify="center">
			<v-dialog v-model="dialog" max-width="600px">
				<v-card>
					<v-card-title>
						<span class="headline">Create a Campaign</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-text-field v-model="newCampaignName" label="Name" required></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field v-model="newCampaignDescription" label="Description" required></v-text-field>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="accent" text @click="clearNewCampaignForm">Cancel</v-btn>
						<v-btn color="accent" text @click="onCampaignCreate">Create</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
	</v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mdiInformation, mdiSwordCross, mdiPlus } from '@mdi/js';
import ICampaign from '../ts/interfaces/ICampaign';
import axios, { AxiosResponse } from 'axios';
import { getDefaultCampaign } from '../ts/interfaces/ICampaign';
import { Store } from 'vuex';
import IStore from '../ts/interfaces/IStore';
import { v1 as uuidV1 } from 'uuid';

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
	public campaigns: ICampaign[] = [];
	public dialog: boolean = false;

	private searchTerm: string = '';
	private newCampaignName: string = '';
	private newCampaignDescription: string = '';

	private async mounted(): Promise<void> {
		this.requestCampaigns();
	}

	private async requestCampaigns(): Promise<void> {
		const store: IStore = this.$store.state;
		const user = store.currentUser;
		console.log(
			`[ Selection ] Requesting campaigns for user ${user.name}.`
		);
		try {
			let res = await axios.get('/requestCampaigns', {
				params: {
					user: user.id
				}
			});
			if (res.data && res.data.campaigns) {
				this.campaigns = res.data.campaigns;
				for (let c of this.campaigns) {
					// Restores the prototype of each date object
					c.dateModified = new Date(c.dateModified);
				}
			}
		} catch (error) {
			console.log(`[ Selection ] Error getting campaigns:\ ${error}`);
			this.campaigns = [getDefaultCampaign()];
		}
	}

	private sortedCampaigns(): ICampaign[] {
		return this.campaigns
			.filter((value: ICampaign) => {
				return value.name
					.toLowerCase()
					.startsWith(this.searchTerm.toLowerCase());
			})
			.sort((a: ICampaign, b: ICampaign) => {
				return b.dateModified.getTime() - a.dateModified.getTime();
			});
	}

	private getRecentDateTimeString(date: Date): string {
		let now = new Date(Date.now()).toLocaleDateString();
		return date.toLocaleDateString() === now
			? date.toLocaleTimeString()
			: date.toLocaleDateString();
	}

	private onSearch(input: string): void {
		if (input) this.searchTerm = input;
		else this.searchTerm = '';
	}

	private onSelection(campaign: ICampaign): void {
		console.log(`[ Selection ] Got selection, ${campaign.name}.`);
		this.$store.state.currentCampaign = campaign;
		this.$router.push('campaign');
	}

	private async onCampaignCreate(): Promise<void> {
		if (this.newCampaignName && this.newCampaignDescription) {
			const store: IStore = this.$store.state;
			console.log(
				`[ Selection ] Creating campaign with name ${this.newCampaignName} ` +
					`and description "${this.newCampaignDescription}".`
			);
			const newCampaign: ICampaign = {
				discriminator: 'spectrum.campaign',
				id: uuidV1(),
				name: this.newCampaignName,
				description: this.newCampaignDescription,
				user: store.currentUser.id,
				dateModified: new Date(Date.now())
			};
			this.clearNewCampaignForm();
			let result = axios
				.post('/createCampaign', {
					campaign: newCampaign
				})
				.then((status: AxiosResponse<any>) => {
					if (status.status === 500) {
						console.log(
							`[ Selection ] Failed to add campaign. Reason ${status.statusText}.`
						);
					} else {
						this.requestCampaigns();
					}
				});
		}
	}

	private clearNewCampaignForm(): void {
		this.newCampaignName = '';
		this.newCampaignDescription = '';
		this.dialog = false;
	}
}
</script>

<style scoped></style>
