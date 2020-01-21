<template>
	<div class="home">
		<Post
			:title="'[ Spectrum ] v0.1.1'"
			:date="'January 21, 2020'"
			:img="'basic-tile-draw.gif'"
			:subtitle="'Tile Palette'"
			:body="
				'A very basic tile palette has been added allowing selection and editing the current tilemap. Highlight'
			"
		/>
		<Post
			:title="'[ Spectrum ] v0.1.0'"
			:date="'January 16, 2020'"
			:img="'basic-move-pan.gif'"
			:subtitle="'Panning/Scrolling'"
			:body="
				'The first thing to get out of the way was rendering of the actual sprites on some tilemap. Next a simple pan/scroll was implemented using WASD, Arrow keys, middle-click-n-drag, shift-click-n-drag and the scroll wheel.'
			"
		/>
		<Post
			:title="'[ Spectrum ] Initial Commit'"
			:date="'January 14, 2020'"
			:img="'setup.png'"
			:subtitle="'Setup'"
			:body="
				'First things first, created a git repo with the three planned projects. Next it didn\'t take long to git the \'Pages\' project building and being deployed to a Github Pages site.'
			"
		/>
		<Post
			:title="'[ Spectrum ] Project Start'"
			:date="'January 9, 2020'"
			:img="'logo.png'"
			:subtitle="'Summary'"
			:body="
				'Spectrum aims to be a host of table-top gaming software to assist and enable a seamless ' +
					'creation to play experience. The finer details of each ' +
					'individual component will be found in the objectives section,' +
					'but a high level review can be found here. To start, the ' +
					'project will primarily entail 3 codebases with a potential ' +
					'variation on 2 of them.'
			"
		/>
	</div>
</template>

<script>
	import Post from '../components/Post.vue';
	export default {
		name: 'home',
		components: {
			Post
		}
	};
</script>
<style scoped>
	.home {
		background-color: #cccccc;
		height: calc(100% - 60px);
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
	}
</style>
