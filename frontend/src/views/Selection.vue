<template>
	<div class="selection">
		<div class="font-weight-light" size="100px">
			Campaigns
		</div>
		<v-card max-width="800" class="mx-auto">
			<v-btn block dark x-large>New Campaign</v-btn>
			<v-text-field label="Search" solo @input="onFilter"></v-text-field>
			<v-list>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					@click="onClick(item)"
				>
					<v-list-item-avatar>
						<v-btn icon>
							<v-icon>{{ swordSvg }}</v-icon>
						</v-btn>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title
							v-text="item.title"
						></v-list-item-title>
						<v-list-item-subtitle
							v-text="item.subtitle"
						></v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-action>
						<v-btn icon>
							<v-icon>{{ infoSvg }}</v-icon>
						</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { mdiInformation, mdiSwordCross } from '@mdi/js';

	@Component({
		components: {}
	})
	export default class Selection extends Vue {
		public items = [
			{
				title: 'First',
				subtitle: 'Subtitle1'
			},
			{
				title: 'Second',
				subtitle: 'Subtitle2'
			},
			{
				title: 'Third',
				subtitle: 'Subtitle3'
			},
			{
				title: 'Third2',
				subtitle: 'Subtitle4'
			}
		];
		public infoSvg = mdiInformation;
		public swordSvg = mdiSwordCross;

		private filter: String;

		constructor() {
			super();
			this.filter = '';
		}

		onFilter() {}

		onSelection(item) {
			// console.log(`${item.title}`);
		}
	}
</script>

<style scoped>
	.selection {
		background-color: #333333;
		width: 100%;
		height: 100%;
	}
</style>
