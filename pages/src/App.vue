<template>
	<div id="app">
		<div id="nav">
			<div class="nav-button" @click="onClick('/')">
				<div class="nav-text">Home</div>
			</div>
			<div class="nav-dropdown">
				<div class="nav-button nav-dropdown-button">
					<div class="nav-text">Contract</div>
				</div>
				<div class="nav-dropdown-content">
					<div
						class="nav-text nav-dropdown-item"
						@click="onClick('/contract')"
					>
						V1
					</div>
				</div>
			</div>
			<div class="nav-button" @click="onClick('/about')">
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
		color: #222222;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		overflow: hidden;
	}
	/* --- Navbar --- */
	#nav {
		background-color: #1e1e1e;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
	.nav-button {
		text-align: center;
		width: 120px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}

	.nav-button:hover {
		background-color: #3d3d3d;
	}

	.nav-text {
		height: 20px;
		color: #cccccc;
		text-emphasis: none;
		text-decoration: none;
		cursor: pointer;
	}

	/* --- Dropdown --- */
	.nav-dropdown {
		width: 120px;
		float: left;
		overflow: hidden;
	}
	.nav-dropdown-content {
		width: 120px;
		height: auto;
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
	.nav-dropdown-item {
		height: 45px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.nav-dropdown-item:hover {
		background-color: #999999;
	}
	.nav-dropdown:hover .nav-dropdown-content {
		display: block;
	}
</style>
