<template>
	<div class="cbackground">
		<div id="cbody">
			<h1>Capstone Project Contract</h1>
			<h2>{{ getDate() }}</h2>
			<h2>Josh Hess</h2>
			<br />

			<h2>Project Description</h2>
			<p>
				This project is essentially a web server that runs a host of
				table-top gaming software to assist and enable a seamless
				creation to play experience. The finer details of each
				individual component will be found in the objectives section,
				but a high level review can be found here. To start, the project
				will primarily entail 3 codebases with a potential variation on
				2 of them.
			</p>
			<li>
				<b>Backend</b> The actual web server doing all the heavy
				lifting. In the simpler design schema this will be packaged as
				an executable and ran locally. Under this scenario this is what
				would get published to steam and offered as a download. In the
				more complex schema the web server would be hosted in the cloud
				and access would be offered via a subscription model. This model
				would fit in perfectly with the <i>design-as-a-service</i> trend
				that has become so popular.
			</li>
			<li>
				<b>Frontend</b> The fronted would be doing heavy lifting of it's
				own but of a differnt nature. This would be the real meat of the
				application. In either scenario, the frontend would be hosted by
				the backend. However, in the more complicated scenario a full
				login/account system would have to be implemented.
			</li>
			<li>
				<b>Website</b> Under either scenario a informational website
				would be hosted to showcase the product and direct potential
				customers toward purchasing the product. For the forseeable
				future this would be hosted with github pages. You may even be
				reading this contract from there.
			</li>
			<p>
				The core funcitons offered by the software will be as follows:
				map editor, character creator, campaign manager, and finally the
				ability to use all the created assets in a gameplay scenario.
			</p>
			<br />

			<h2>Main Objectives</h2>
			<li>
				<b>Map Editor</b> capabilities including creation,
				customization, saving, and loading. The creation and
				customization is limited to a single tilemap layer. Nothing
				further.
			</li>
			<li>
				<b>Campaign management</b> the main part of this is simply to be
				able to group maps and notes together.
			</li>
			<li>
				<b>Viewing</b> of the map for gameplay. The main part of this
				being able to switch between a editor and map maker mode.
			</li>
			<br />

			<h2>Secondary Objectives</h2>
			<li>
				<b>Map Editor</b> the secondary portion aims to offer a layer on
				top of the tilemap for more detailed items. This include but is
				not limited to rocks, trees, items, characters, and text.
			</li>
			<li>
				<b>Campaign management</b> here the next step would be the
				ability to add characters to a campaign to allow stat tracking.
			</li>
			<li>
				<b>Viewing</b> here this would entail multiple viewing modes:
				viewer, user, or game master. This means there will be three
				modes of gameplay operation. One will allow simple 'dumb'
				viewing of whatever map is loaded for the sessions campaign. The
				second will enable viewing the map, limited interaction with the
				map, and switching to a stats mode. Finally the third will allow
				complete control of the map, all stats features of all
				characters and whater notes are stored with the campaign. This
				of course necessarily entails a larger objective in that the
				sessions between different users would have to be synced in some
				way. (More on this later as the design becomes more clear.)
			</li>
			<br />

			<h2>Tertiary Objectives</h2>
			<li>
				A service as a subsription model. This would include registering
				as a business with paypal or some payment service. Integration
				of their api to the website. Having the website integrate to the
				backend project to allow payed for members to acces content from
				multiple devices.
			</li>
			<li>
				A forum to allow users to share creations with a wider
				community.
			</li>
			<br />

			<h2>Submissible Items</h2>
			<li>
				All source code for the backend, frontend, and website repos.
			</li>
			<li>
				An executable of the local version of the web server.
			</li>
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
			<div class="ctext">Print</div>
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
			},
			getDate: function() {
				let months = [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				];
				let d = new Date();
				return `${
					months[d.getMonth()]
				} ${d.getDate()}, ${d.getFullYear()}`;
			}
		}
	};
</script>
<style scoped>
	* {
		height: auto;
		width: auto;
	}
	li {
		margin-left: 2em;
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
