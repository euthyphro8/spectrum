<template>
	<v-content>
		<v-toolbar color="primary" extended="">
			<v-tooltip bottom open-delay="500" close-delay="250">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="$router.back()" :disabled="loading">
						<v-icon v-on="on">{{ mdiArrowLeft }}</v-icon>
					</v-btn>
				</template>
				<span>Back</span>
			</v-tooltip>

			<v-toolbar-title>Character</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-tooltip bottom open-delay="500" close-delay="250">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="onSave" :disabled="loading">
						<v-icon v-on="on">{{ mdiContentSave }}</v-icon>
					</v-btn>
				</template>
				<span>Save</span>
			</v-tooltip>

			<v-tooltip bottom open-delay="500" close-delay="250">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="onDuplicate" :disabled="loading">
						<v-icon v-on="on">{{ mdiContentSaveAll }}</v-icon>
					</v-btn>
				</template>
				<span>Duplicate</span>
			</v-tooltip>

			<v-tooltip bottom open-delay="500" close-delay="250">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="onCreate" :disabled="loading">
						<v-icon v-on="on">{{ mdiPlus }}</v-icon>
					</v-btn>
				</template>
				<span>New</span>
			</v-tooltip>
			<template v-slot:extension>
				<v-select
					bottom
					class="mt-3"
					dense
					outlined
					:items="alphabeticalCharacters"
					label="Character Select"
					@change="onChange"
					:loading="loading"
					:disabled="loading"
				/>
			</template>
		</v-toolbar>
		<v-content class="fill-height ma-12">
			<v-row>
				<v-col cols="8">
					<form>
						<v-text-field
							:value="characterName"
							label="Name"
							:disabled="formDisabled"
						></v-text-field>
						<v-select
							:value="characterImage"
							:items="
								$store.state.entities.names.map(
									(name, index) => {
										return {
											text: toTitleCase(name),
											value: index
										};
									}
								)
							"
							label="Image"
							:disabled="formDisabled"
							@change="onImageChange"
						></v-select>
						<v-checkbox
							:v-model="characterPlayable"
							label="Playable?"
							:disabled="formDisabled"
						></v-checkbox>
					</form>
				</v-col>
				<v-col cols="4"
					><img
						class="character-image"
						:src="characterImageSrc"
						alt="Character Image"
				/></v-col>
			</v-row>
		</v-content>
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import axios from 'axios';
	import IStore from '../ts/interfaces/IStore';
	import {
		mdiPlus,
		mdiArrowLeft,
		mdiContentSave,
		mdiContentSaveAll
	} from '@mdi/js';
	import ICharacter, {
		getDefaultCharacter
	} from '../ts/interfaces/ICharacter';
	import ICampaign from '../ts/interfaces/ICampaign';
	import { v1 as uuidV1 } from 'uuid';

	@Component({
		data: () => {
			return {
				mdiPlus,
				mdiArrowLeft,
				mdiContentSave,
				mdiContentSaveAll
			};
		}
	})
	export default class Character extends Vue {
		private selectedCharacter!: ICharacter;
		private characters: ICharacter[] = [];
		private characterName: string = '';
		private characterImage: number = 0;
		private characterPlayable: boolean = false;
		private formDisabled: boolean = true;
		private loading: boolean = false;
		private characterImageSrc: string = '';

		private get alphabeticalCharacters(): any[] {
			return this.characters
				.sort((a: ICharacter, b: ICharacter) => {
					return b.name < a.name ? 1 : -1;
				})
				.map((c: ICharacter) => {
					return { text: c.name, value: c };
				});
		}

		private async created(): Promise<void> {
			this.requestCharacters();
			this.characterImageSrc = this.$store.state.entities.getImage(
				this.characterImage
			).src;
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
						campaign: campaign.id
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

		private onChange(value: ICharacter): void {
			// console.log(`Changed ${JSON.stringify(value)}`);
			this.formDisabled = false;
			this.selectedCharacter = value;
			this.characterName = value.name;
			this.characterImage = value.entityId;
			this.characterPlayable = value.playable;
		}

		private onSave(): void {
			if (!this.formDisabled) {
				this.loading = true;
				axios
					.post('/saveCharacter', {
						character: this.selectedCharacter
					})
					.catch(() => {
						// TODO Have an error message.
						console.error(
							'[ Character ] Failed to save character!'
						);
					})
					.finally(() => {
						this.loading = false;
						this.requestCharacters();
					});
			}
		}
		private onDuplicate(): void {
			if (!this.formDisabled) {
				const store: IStore = this.$store.state;
				this.loading = true;
				this.characterName = 'New Character';
				let newCharacter: ICharacter = {
					discriminator: 'spectrum.character',
					id: uuidV1(),
					name: this.characterName,
					entityId: this.characterImage,
					campaign: store.currentCampaign.id,
					playable: this.characterPlayable
				};
				axios
					.post('/saveCharacter', {
						character: newCharacter
					})
					.catch(() => {
						// TODO Have an error message.
						console.error(
							'[ Character ] Failed to duplicate character!'
						);
					})
					.finally(() => {
						this.loading = false;
						this.requestCharacters();
					});
			}
		}
		private onCreate(): void {
			this.formDisabled = false;
			const store: IStore = this.$store.state;
			// this.loading = true;
			this.characterName = 'New Character';
			this.characterImage = 0;
			this.characterPlayable = false;
			this.selectedCharacter = {
				discriminator: 'spectrum.character',
				id: uuidV1(),
				name: this.characterName,
				entityId: this.characterImage,
				campaign: store.currentCampaign.id,
				playable: this.characterPlayable
			};
			// TODO decide if a new character should be saved right away
			// axios
			// 	.post('/saveCharacter', {
			// 		character: newCharacter
			// 	})
			// 	.catch(() => {
			// 		// TODO Have an error message.
			// 		console.error(
			// 			'[ Character ] Failed to create character!'
			// 		);
			// 	})
			// 	.finally(() => {
			// 		this.loading = false;
			// 		this.requestCharacters();
			// 	});
		}

		private onImageChange(value: any): void {
			console.log(`value changed ${value}`);
			this.characterImageSrc = this.$store.state.entities.getImage(
				value
			).src;
		}
		private toTitleCase(s: string) {
			return s
				.toLowerCase()
				.replace('_', ' ')
				.replace(/\b(\w)/g, (s) => s.toUpperCase());
		}
	}
</script>

<style scoped>
	.character-image {
		height: 100%;
		margin: auto;
		image-rendering: pixelated;
	}
</style>
