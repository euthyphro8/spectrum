<template>
	<div class="post-body">
		<h1>{{ title }}</h1>
		<h2>{{ date }}</h2>
		<!-- <img src="@/assets/logo.png" /> -->
		<img :src="require(`@/assets/posts/${img}`)" />
		<div class="post-content">
			<h3>{{ subtitle }}</h3>
			<p>{{ body }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'post',
		methods: {},
		props: {
			title: String,
			date: String,
			img: String,
			subtitle: String,
			body: String
		}
	};
</script>
<style scoped>
	* {
		height: auto;
		width: auto;
	}
	.post-body {
		min-height: min-content;
		max-width: 960px;
		border-radius: 60px;
		width: calc(92% - 140px);
		margin: 2% 2%;
		padding: 45px 70px;
		background-color: #777777;
	}
	h1 {
		width: 100%;
		text-align: center;
	}
	h2 {
		width: 100%;
		text-align: center;
		margin-bottom: 20px;
	}
	h3 {
		width: 100%;
	}
	img {
		border-radius: 15px;
		width: 84%;
		display: block;
		margin: 0 auto;
	}
	p {
		width: 100%;
	}
	.post-content {
		margin-top: 20px;
		border-radius: 30px;
		width: calc(100% - 60px);
		padding: 30px 30px;
		background-color: #555555;
	}
</style>
