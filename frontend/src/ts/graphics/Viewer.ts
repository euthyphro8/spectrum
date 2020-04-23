import Controller from './Controller';
import Tile from './Tile';
import Vector2 from '../interfaces/Vector2';
import IStore from '../interfaces/IStore';
import Screen from './Screen';
import Map from '../world/Map';
import { Store } from 'vuex';
import ICharacter from '../interfaces/ICharacter';
import Axios from 'axios';

export default class Viewer {
	private store: Store<IStore>;
	private cursorLocation: Vector2;
	private selectedCharacter?: ICharacter;

	constructor(store: Store<IStore>) {
		this.store = store;
		this.cursorLocation = new Vector2();
		this.selectedCharacter = undefined;
	}

	public update(screen: Screen, controller: Controller, map: Map): void {
		// Receive updated character list from server
		if (this.store.state.characterCache) {
			console.log('[ Viewer ] Updating the characters.');
			map.characters = this.store.state.characterCache;
			this.store.state.characterCache = undefined;
		}

		this.cursorLocation.x = controller.mx;
		this.cursorLocation.y = controller.my;
		screen.screenToIndexSpace(this.cursorLocation);

		const xi = this.cursorLocation.x;
		const yi = this.cursorLocation.y;

		if (
			this.store.state.sessionRole === 'master' ||
			this.store.state.sessionRole === 'player'
		) {
			// If we are dragging a character
			if (this.selectedCharacter) {
				// Try to move it to the mouse position
				if (!map.getCharacter(xi, yi)) {
					map.updateCharacter(xi, yi, this.selectedCharacter.id);
					// If we do change the character, try to update the session with the new character list
					this.store.dispatch('updateSession', map.characters);
				}
				// Stop dragging it if there is no more click.
				if (!controller.getClick()) {
					this.selectedCharacter = undefined;
				}
			} else {
				if (controller.getClick()) {
					if (this.store.state.sessionRole === 'master') {
						this.selectedCharacter = map.getCharacter(xi, yi);
					} else if (this.store.state.sessionRole === 'player') {
						let selected = map.getCharacter(xi, yi);
						if (selected && selected.playable) {
							this.selectedCharacter = selected;
						}
					}
				}
			}
		}

		screen.indexToScreenSpace(this.cursorLocation);
	}
	public render(screen: Screen): void {
		if (
			this.store.state.sessionRole === 'master' ||
			this.store.state.sessionRole === 'player'
		) {
			screen.renderTileOutline(
				this.cursorLocation.x,
				this.cursorLocation.y
			);
		}
	}
}
