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
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
		name: 'DialogueBox',
		components: {},
		props: {
			title: String,
			message: String,
			hidden: String
		}
	})
	export default class DialogueBox extends Vue {}
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
	}
	.dialogue-background:hover {
		background-color: #111111bb !important;
	}
	.dialogue-box {
		background-color: #444444;
		position: absolute;
		width: 40%;
		height: 24%;
		left: 30%;
		top: 38%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border: 2px solid #bbbbbb;
		min-width: 400px;
		max-width: 800px;
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
