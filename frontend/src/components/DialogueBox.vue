<template>
	<div class="dialogue-background" :class="{ hidden: hidden }">
		<div class="dialogue-box">
			<h1>{{ title }}</h1>
			<h2>{{ message }}</h2>
			<div
				class="dialogue-button"
				@click="
					hidden = true;
					$emit('confirmed');
				"
			>
				<h2>Confirm</h2>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Prop, Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'DialogueBox',
		components: {}
	})
	export default class DialogueBox extends Vue {
		@Prop()
		private title!: string;
		@Prop()
		private message!: string;
		@Prop()
		private hidden!: string;
	}
</script>

<style scoped>
	.hidden {
		visibility: hidden;
		height: 0;
		width: 0;
	}
	.dialogue-background {
		background-color: #111111bb;
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.dialogue-background:hover {
		background-color: #111111bb !important;
	}
	.dialogue-box {
		background-color: #444444;
		position: absolute;
		width: 500px;
		height: 300px;
		margin-left: calc(50% - 250px);
		margin-top: calc(10%);

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border: 2px solid #bbbbbb;
	}
	.dialogue-button {
		background-color: #333333;
		width: 200px;
		height: 40px;
		border: 2px solid #bbbbbb;
	}
	.dialogue-button:hover {
		background-color: #222222;
	}
	h1 {
		width: auto;
		height: auto;
		font-size: 1.8em;
		font-weight: 600;
		color: #bbbbbb;
	}
	h2 {
		margin: 8px 32px;
		width: auto;
		height: auto;
		font-size: 1.1em;
		font-weight: 300;
		color: #bbbbbb;
	}
</style>
