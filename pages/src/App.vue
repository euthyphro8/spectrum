<template>
	<div id="app">
		<div id="nav">
			<div class="nav-but" @click="onClick('/')">
				<div class="nav-text">Home</div>
			</div>
			<div class="nav-but" @click="onClick('/contract')">
				<div class="nav-text">Contract</div>
			</div>
			<div class="nav-but" @click="onClick('/about')">
				<div class="nav-text">About</div>
			</div>
		</div>
		<router-view />
	</div>
</template>
<script>
	export default {
		name: 'app',
		component: {},
		methods: {
			onClick: function(name) {
				this.$router.push(name);
			}
		}
	};
</script>
<style>
	* {
		font-family: 'Montserrat', sans-serif;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		overflow: hidden;
	}

	#nav {
		background-color: #1e1e1e;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
	.nav-but {
		text-align: center;
		width: 120px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.nav-but:hover {
		background-color: #3d3d3d;
	}
	.nav-text {
		height: 20px;
		color: #cccccc;
		text-emphasis: none;
		text-decoration: none;
	}
</style>
