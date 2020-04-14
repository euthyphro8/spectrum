<template>
	<div class="character-bar">
		<div class="title">- CHARACTER -</div>
		<div class="container">
			<v-select
				outlined
				:items="alphabeticalCharacters()"
				label="Character Select"
				@change="onChange"
			/>
		</div>
		<hr class="section" />
		<div class="button" @click="$router.push('/character')">Editor</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import IStore from '../../ts/interfaces/IStore';
	import ICharacter, {
		getDefaultCharacter
	} from '../../ts/interfaces/ICharacter';
	import axios from 'axios';

	@Component({
		components: {}
	})
	export default class CharacterBar extends Vue {
		private characters: ICharacter[] = [];
		private selectedCharacter: number = -1;
		private characterDialog: boolean = true;

		private alphabeticalCharacters(): any[] {
			return this.characters
				.sort((a: ICharacter, b: ICharacter) => {
					return b.name < a.name ? 1 : -1;
				})
				.map((c: ICharacter) => {
					return { text: c.name, value: c.id };
				});
		}

		private async mounted(): Promise<void> {
			this.requestCharacters().catch((error) => {
				console.log(`[ CharacterBar ] Error:\ ${error}`);
			});
		}

		private async requestCharacters(): Promise<void> {
			const store: IStore = this.$store.state;
			const campaign = store.currentCampaign;
			console.log(
				`[ CharacterBar ] Requesting characters for campaign ${campaign.name}.`
			);
			try {
				let res = await axios.get('/requestCharacters', {
					params: {
						campaignId: campaign.id
					}
				});
				if (res.data && res.data.characters) {
					this.characters = res.data.characters;
				}
			} catch (error) {
				console.log(
					`[ CharacterBar ] Error getting characters:\ ${error}`
				);
				this.characters = [getDefaultCharacter()];
			}
		}

		private onChange(): void {}
	}
</script>

<style scoped>
	.character-bar {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.title {
		margin-top: 23px;
		margin-bottom: 16px;
		height: auto;
		color: #999999;
		font-size: 18px;
		letter-spacing: 4px;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.button {
		height: 72px;
		width: 182px;
		margin: 4px;
		background-color: #3c3c3c;
		color: #818181;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 20px;
	}
	.button:hover {
		background-color: #666666;
		color: #ffffff;
	}
	.container {
		width: 182px;
		height: 72px;
		margin: 4px 2px -6px 2px;
		padding: 0px;
	}
	.section {
		width: 50%;
		margin: 32px 0px;
	}
</style>
