<template>
	<v-content>
		<!-- <v-app-bar color="primary">
			<span class="title mx-3">Spectrum</span>
			<v-spacer />
			<span class="title mx-3">Session</span>
		</v-app-bar> -->
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="8" md="4">
					<v-card class="elevation-12">
						<v-toolbar color="primary">
							<v-toolbar-title>
								Join Session
							</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-text-field
								class="mt-4 ml-6 mr-2"
								hint="4 Characters"
								placeholder="Code"
								filled
								v-model="code"
								:append-outer-icon="mdiSend"
								@click:append-outer="onSubmit"
							/>
							<div class="mb-2 mx-12">{{ infoMessage }}</div>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import { mdiSend } from '@mdi/js';

	@Component({
		data: () => {
			return {
				mdiSend
			};
		}
	})
	export default class Session extends Vue {
		@Prop({ default: '' })
		public source!: string;
		public code: string = '';
		public label: string = '';
		private infoMessage =
			'Enter the Session Code for the Campaign you would like to join (The DM should create a session and have the code).';
		onSubmit(event: any) {
			console.log(`submitting with ${this.code}`);
		}
	}
</script>

<style></style>
