<template>
	<div class="entity-bar">
		<div class="title">- ENTITY -</div>
		<v-text-field
			color="primary"
			class="mx-2"
			v-model="entityName"
			filled
			dense
		></v-text-field>
		<div class="button" @click="onCreate()">Create</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import IStore from '../../ts/interfaces/IStore';

	@Component({
		name: 'EntityBar',
		components: {}
	})
	export default class EntityBar extends Vue {
		private entityName: string = '';

		mounted(): void {}

		onCreate(): void {}
	}
</script>

<style scoped>
	.entity-bar {
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
</style>
