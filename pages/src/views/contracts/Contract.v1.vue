<template>
	<div class="cbackground">
		<div id="cbody">
			<h1>Student Project Contract</h1>
			<h2>Submitted on January 15, 2020</h2>
			<h2>Submitted by: Josh Hess</h2>
			<br />
			<h2>Project Description:</h2>
			<p>
				(Describe your project in as much detail as you can. Include
				such things as what questions you are going to research, who
				this is going to benefit, how the project encompasses what you
				have learned here at SUU, and any other information that will
				convince your instructor to approve your project. The more
				detail the better.)
			</p>
			<br />
			<h2>Main Objectives:</h2>
			<p>
				List here items you are fully committed to getting done. Not
				getting these items done means you did not fully complete your
				project.
			</p>
			<br />
			<h2>Secondary Objectives:</h2>
			<p>
				List here objectives that you hope to get to, but that you might
				not complete. You must complete most of these objectives to get
				full credit.
			</p>
			<br />
			<h2>Tertiary Objectives:</h2>
			<p>
				These are your dream objectives. You are doubtful you’ll get to
				complete any of them, but it would be awesome if you did so.
				Completing one of these puts you into the above and beyond
				category. 100% credit would mean you completed all main, all
				secondary, and at least one tertiary objective
			</p>
			<br />
			<h2>Submissible Items:</h2>
			<p>
				Create a list of items you are going to submit as part of your
				report. If the only item you are going to submit is the written
				report, then state that.
			</p>
			<br />
			<br />
			<br />
			<br />
			<p>
				I will assess the final project based on the goals and
				submissabiles outlined in this document.
			</p>
			<br />
			<p>
				Professor: __________________________________________Date:
				___________________
			</p>
			<br />
			<p>
				I understand that the final assessment of my project will be
				based on the information contained in this report.
			</p>
			<br />
			<p>
				Student: ___________________________________________Date:
				___________________
			</p>
			<br />
		</div>
		<div class="cprint" @click="onPrint">
			<div class="ctext">
				Print
			</div>
		</div>
	</div>
</template>
<script>
	// import print from 'vue-html-to-paper';
	export default {
		name: 'contract',
		methods: {
			onPrint: function() {
				this.$htmlToPaper('cbody');
			}
		}
	};
</script>
<style scoped>
	* {
		height: auto;
		width: auto;
	}
	.cbackground {
		background-color: #cccccc;
		overflow-y: auto;
		height: calc(100% - 60px);
	}
	#cbody {
		border-radius: 30px;
		width: calc(84% - 200px);
		margin: 3% 8%;
		margin-bottom: 15px;
		height: auto;
		padding: 60px 100px;
		background-color: #777777;
	}
	h1 {
		width: 100%;
	}
	h2 {
		width: 100%;
	}
	p {
		width: 100%;
	}
	.ctext {
		display: block;
		margin-top: 1em;
		margin-bottom: 1em;
		margin-left: 0;
		margin-right: 0;
		height: 1em;
		width: 100%;
	}
	.cprint {
		border-radius: 20px;
		display: flex;
		margin-left: calc(50% - (200px / 2));
		text-align: center;
		height: 2em;
		width: 200px;
		background-color: #777777;
		padding-bottom: 20px;
		margin-bottom: 30px;
	}

	.cprint:hover {
		background-color: #555555;
	}
</style>
