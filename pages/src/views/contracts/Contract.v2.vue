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
				individual component will be found below, but a high level
				review can be found here. To start, the project will primarily
				entail 3 codebases with a potential variation on 2 of them.
			</p>
			<ul>
				<li>
					<b>Backend</b> The actual web server doing all the heavy
					lifting. In the simpler design schema this will be packaged
					as an executable and ran locally. Under this scenario this
					is what would get published to steam and offered as a
					download. In the more complex schema the web server would be
					hosted in the cloud and access would be offered via a
					subscription model.
				</li>
				<li>
					<b>Frontend</b> The fronted would be doing heavy lifting of
					it's own but of a differnt nature. This would be the real
					meat of the application. In either scenario, the frontend
					would be hosted by the backend. However, in the more
					complicated scenario a full login/account system would have
					to be implemented.
				</li>
				<li>
					<b>Website</b> Under either scenario a informational website
					would be hosted to showcase the product and direct potential
					customers toward purchasing the product. For the forseeable
					future this would be hosted with github pages. You may even
					be reading this contract from there.
				</li>
			</ul>
			<p>
				The core funcitons offered by the software will be as follows:
				map editor, character creator, campaign manager, and finally the
				ability to use all the created assets in a gameplay scenario.
			</p>

			<h2>Main Objectives</h2>
			<ul>
				<li>
					<b>Map Editor</b> Basic creation, customization, saving, and
					loading.
					<ul>
						<li>
							<i>Creation</i> - The ability to create a new map
							resource of any size.
						</li>
						<li>
							<i>Customization</i> - At least 12 different kinds
							of tiles to customize the map with.
						</li>
						<li>
							<i>Saving</i> - The ability to save maps server
							side.
						</li>
						<li>
							<i>Loading</i> - The ability to display all saved
							maps and load them into the editor.
						</li>
					</ul>
				</li>
				<li>
					<b>Campaign Manager</b> Basic resource management.
					<ul>
						<li>
							<i>Resources</i> - The ability to create maps and
							notes in a different view than the map editor.
						</li>
						<li>
							<i>Grouping</i> - The ability to group resources by
							campaign.
						</li>
					</ul>
				</li>
				<li>
					<b>Viewing Modes</b> One viewing modes.
					<ul>
						<li>
							<i>Basic Viewing</i> - While viewing a map the
							ability to switch between editor and view only mode.
						</li>
					</ul>
				</li>
			</ul>

			<h2>Secondary Objectives</h2>
			<ul>
				<li>
					<b>Map Editor</b> More advanced customization.
					<ul>
						<li>
							<i>Item Layer</i> - A layer on top of the tilemap to
							place various items. ie rocks, trees, characters,
							and text.
						</li>
					</ul>
				</li>
				<li>
					<b>Campaign Manager</b> Characters and enemies.
					<ul>
						<li>
							<i>Characters</i> - The ability to add characters
							with basic interactable stats. eg Health, strength,
							wisdom, etc.
						</li>
						<li>
							<i>Enemies</i> - The ability to add enemeies with
							basic static stats.
						</li>
					</ul>
				</li>
				<li>
					<b>Viewing Modes</b> Basic, player, game master viewing
					modes.
					<ul>
						<li>
							<i>Basic</i> - Similar to before, but specifically
							for viewing the map with all other users on it.
						</li>
						<li>
							<i>Player</i> - Similar to basic viewing but allows
							simple interaction with the map. At a minimum the
							ability to move around the their player.
						</li>
						<li>
							<i>Game Master</i> - Like player but allows complete
							interaction with the map. Additionally, any game
							master notes are only visible to the game master
							viewing mode.
						</li>
					</ul>
				</li>
			</ul>

			<h2>Tertiary Objectives</h2>
			<li>
				Complete synchronization accross all viewer modes in the same
				campaign.
			</li>
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

			<h2>Submissible Items</h2>
			Items shall be defined as follows:
			<li>
				All source code for the backend, frontend, and website repos.
			</li>
			<li>
				An executable of the local version of the web server.
			</li>
			<li>
				A link to a publically hosted web server.
			</li>
			<br />

			<h2>Rights & Reservations</h2>
			<p>
				All rights to any intellectual property created as a result of
				this project will go to the sole beneficiary, Josh Hess. Any
				items given up for review at any point during the project's
				development shall not be considered the act of forfeiting claim
				over any intellectual property. Hence, any such items remain
				subject to copyright laws and may not be redistributed without
				permission of the sole beneficiary.
			</p>
			<br />

			<p>
				I will assess the final project based on the goals and
				submissabiles outlined in this document.
			</p>
			<br />
			<p>
				Professor: ____________________________________________________
				Date: ___________________
			</p>
			<br />
			<p>
				I understand that the final assessment of my project will be
				based on the information contained in this report.
			</p>
			<br />
			<p>
				Student: _____________________________________________________
				Date: ___________________
			</p>
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
