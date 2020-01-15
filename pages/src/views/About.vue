<template>
	<div class="about">
		<br />
		<h1>
			About
		</h1>
		<br />
		<p>
			This project was made by Josh Hess as a university capstone project
			for SUU.
		</p>
	</div>
</template>

<script>
	export default {
		name: 'home',
		components: {}
	};
</script>
<style scoped>
	h1 {
		height: auto;
		text-align: center;
	}
	h2 {
		height: auto;
		text-align: center;
	}
	p {
		height: auto;
		text-align: center;
	}
	.about {
		background-color: #cccccc;
		overflow-y: auto;
		height: calc(100% - 60px);
	}
</style>
