import { Store } from 'vuex';

import IStore from '../interfaces/IStore';

//#region [white] Imports
//#endregion

class AssetPalette {
	//#region [red] Constants
	//#endregion

	//#region [purple] Fields
	private store: Store<IStore>;
	//#endregion

	//#region [blue] Constructor
	constructor(store: Store<IStore>) {
		this.store = store;
	}
	//#endregion

	//#region [green] Public
	//#endregion

	//#region [yellow] Private
	//#endregion
}
export default AssetPalette;
