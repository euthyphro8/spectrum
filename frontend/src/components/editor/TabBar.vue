<template>
	<div class="tab-bar">
		<div class="tabs">
			<Tab
				v-for="tab in tabs"
				:key="tab.name"
				:name="tab.name"
				:active="tab.active"
				:image="tab.image"
				@clicked="onClick(tab)"
			/>
		</div>
		<div class="content" :class="{ hidden: !tabActive }">
			<component :is="currentTab"></component>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Tab from './Tab.vue';
	import ITab from '@/ts/interfaces/ui/ITab';
	import FileBar from './FileBar.vue';
	import TileBar from './TileBar.vue';
	import AssetBar from './AssetBar.vue';
	@Component({
		name: 'TabBar',
		components: {
			Tab
		}
	})
	export default class TabBar extends Vue {
		private tabs: ITab[] = [];
		private currentTab: any = null;
		private tabActive: boolean = false;

		mounted(): void {
			this.tabs = [
				{
					name: 'File',
					active: false,
					image: 'F',
					component: FileBar
				},
				{
					name: 'Tiles',
					active: false,
					image: 'T',
					component: TileBar
				},
				{
					name: 'Assets',
					active: false,
					image: 'A',
					component: AssetBar
				},
				{
					name: 'Forum',
					active: false,
					image: 'C',
					component: AssetBar
				}
			];
		}

		onClick(tab: ITab): void {
			console.log(`got tab: ${tab.name}`);
			this.tabs.forEach((t) => {
				if (tab.name !== t.name) t.active = false;
			});
			if (tab.active) {
				tab.active = false;
				this.currentTab = null;
				this.tabActive = false;
			} else {
				tab.active = true;
				this.currentTab = tab.component;
				this.tabActive = true;
			}
		}
	}
</script>

<style scoped>
	.tab-bar {
		width: auto;
		background-color: #3d3d3d;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
	}
	.tabs {
		background-color: #333333;
		width: 46px;
	}
	.content {
		background-color: #252526;
		width: 196px;
	}
	.hidden {
		visibility: hidden;
		width: 0px;
	}
</style>
