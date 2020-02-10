<template>
	<div class="tab" @click="$emit('clicked')" :class="{ highlighted: active }">
		{{ image }}
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	@Component({
		name: 'Tab',
		components: {}
	})
	export default class Tab extends Vue {
		@Prop()
		private name!: string;
		@Prop()
		private active!: boolean;
		@Prop()
		private image!: string;
	}
</script>

<style scoped>
	.tab {
		color: #818181;
		width: 46px;
		height: 64px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-decoration: none;
		cursor: pointer;
	}
	.tab:hover {
		color: #ffffff;
	}
	.highlighted {
		color: #ffffff;
		background-color: #252526;
	}
</style>
