import { MongoClient, Db, Collection } from 'mongodb';
import Context from '../utils/Context';
import IMap, { instanceOfIMap } from '../interfaces/IMap';
import { DefaultTemplate } from '../assets/DefaultTemplate';
import ITile, { instanceOfITile } from '../interfaces/ITile';
import { DefaultTileRegistry } from '../assets/DefaultTileRegistry';
import ICampaign, { instanceOfICampaign } from '../interfaces/ICampaign';

export default class DatabaseService {
	private context: Context;
	private client!: MongoClient;
	private database!: Db;

	// Collections
	private templates!: Collection;
	private tiles!: Collection;
	private campaigns!: Collection;
	private maps!: Collection;
	private users!: Collection;

	constructor(context: Context) {
		this.context = context;
	}

	public async connect(): Promise<void> {
		try {
			if (!this.client) {
				this.context.Logger.info(
					'[ DTBS SVC ] Connecting to database instance.'
				);
				this.client = await MongoClient.connect(
					this.context.Config.DbUri,
					{
						useNewUrlParser: true,
						useUnifiedTopology: true,
					}
				);
				this.context.Logger.info(
					`[ DTBS SVC ] Connected to mongodb server.`
				);
				this.database = this.client.db(this.context.Config.DbName);
				this.context.Logger.info(`[ DTBS SVC ] Got database instance.`);

				this.templates = this.database.collection('templates');
				this.campaigns = this.database.collection('campaigns');
				this.maps = this.database.collection('maps');
				this.tiles = this.database.collection('tiles');
				this.users = this.database.collection('users');
				this.context.Logger.info(
					`[ DTBS SVC ] Got collection instances.`
				);
			}
		} catch (error) {
			this.context.Logger.crit(
				`[ DTBS SVC ] Unable to connect to mongodb. Reason:${error}`
			);
		}
	}

	// Setup database if it's the first time
	public async verifyIntegrity(): Promise<void> {
		// Add defaults if none exist
		var temps = await this.getAllTemplates();
		if (temps.length <= 0) this.templates.insertOne(DefaultTemplate);

		var tiles = await this.getAllTiles();
		if (tiles.length <= 0) this.tiles.insertMany(DefaultTileRegistry.tiles);
	}

	/**
	 * Gets all the tiles from the tiles database.
	 */
	public async getAllTiles(): Promise<ITile[]> {
		try {
			const raw = await this.tiles!.find({}).toArray();
			const tiles: ITile[] = [];
			for (const tile of raw) {
				if (instanceOfITile(tile)) tiles.push(tile);
				else
					throw new Error(
						`[ DTBS SVC ] Got non-tile back from tiles database.`
					);
			}
			return tiles;
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with getting templates. 
                    ${generalError.message || generalError}`
			);
			throw generalError;
		}
	}

	/**
	 * Gets all the templates from the template database.
	 */
	public async getAllTemplates(): Promise<IMap[]> {
		try {
			const raw = await this.templates!.find({}).toArray();
			const templates: IMap[] = [];
			for (const template of raw) {
				if (instanceOfIMap(template)) templates.push(template);
				else
					throw new Error(
						`[ DTBS SVC ] Got non-map back from templates database.`
					);
			}
			return templates;
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with getting templates. 
                    ${generalError.message || generalError}`
			);
			throw generalError;
		}
	}

	/**
	 * Gets all the campaigns from the Campaign database.
	 */
	public async getAllCampaigns(user: string): Promise<ICampaign[]> {
		try {
			const raw = await this.campaigns!.find({}).toArray();
			const campaigns: ICampaign[] = [];
			for (const campaign of raw) {
				if (instanceOfICampaign(campaign)) campaigns.push(campaign);
				else
					throw new Error(
						`[ DTBS SVC ] Got non-campaign back from campaigns database.`
					);
			}
			return campaigns;
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with getting campaigns. 
                    ${generalError.message || generalError}`
			);
			throw generalError;
		}
	}

	public async createCampaign(campaign: ICampaign): Promise<boolean> {
		try {
			this.context.Logger.info(
				`[ DTBS SVC ] Adding campaign for ${JSON.stringify(
					campaign.name
				)}`
			);
			// No checks here since this will overwrite any existing version.
			const r = await this.campaigns.replaceOne(
				{
					id: campaign.id,
				},
				campaign,
				{
					upsert: true,
				}
			);
			if (r.modifiedCount + r.upsertedCount > 0) {
				return true;
			}
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with the insert. ${
					generalError.message || generalError
				}`
			);
		}
		return false;
	}

	/**
	 * Gets all the maps from the Maps database.
	 */
	public async getAllMaps(): Promise<IMap[]> {
		try {
			const raw = await this.maps!.find({}).toArray();
			const maps: IMap[] = [];
			for (const map of raw) {
				if (instanceOfIMap(map)) maps.push(map);
				else
					throw new Error(
						`[ DTBS SVC ] Got non-map back from maps database.`
					);
			}
			return maps;
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with getting maps. 
                    ${generalError.message || generalError}`
			);
			throw generalError;
		}
	}

	public async saveMap(map: IMap): Promise<boolean> {
		try {
			this.context.Logger.info(
				`[ DTBS SVC ] Add map for ${JSON.stringify(map.name)}`
			);
			// No checks here since this will overwrite any existing version.
			const r = await this.maps.replaceOne(
				{
					name: map.name,
				},
				map,
				{
					upsert: true,
				}
			);
			if (r.matchedCount + r.modifiedCount + r.upsertedCount > 0) {
				return true;
			}
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with the insert. ${
					generalError.message || generalError
				}`
			);
		}
		return false;
	}

	// /**
	//  * Simply adds in a new user account provided one with the same username or email cannot be found.
	//  * @param user The user info to be added.
	//  */
	// public async addAccount(user: IAccountInfo): Promise<DatabaseReturnStatus> {
	// 	if (!this.client) {
	// 		await this.connect();
	// 	}
	// 	try {
	// 		this.context.Logger.info(
	// 			`[ DTBS SVC ] Add account request for ${JSON.stringify(user)}`
	// 		);
	// 		// If an account with the same username already exists
	// 		const usernameQuery = await this.collection!.findOne({
	// 			username: user.username
	// 		});
	// 		if (usernameQuery) {
	// 			this.context.Logger.info(
	// 				`[ DTBS SVC ] Found account with same username ${JSON.stringify(
	// 					usernameQuery
	// 				)}`
	// 			);
	// 			return DatabaseReturnStatus.UsernameTaken;
	// 		}
	// 		// If an account with the same email already exists
	// 		const emailQuery = await this.collection!.findOne({
	// 			email: user.email
	// 		});
	// 		if (emailQuery) {
	// 			this.context.Logger.info(
	// 				`[ DTBS SVC ] Found account with same email ${
	// 					(emailQuery as IAccountInfo).email
	// 				}`
	// 			);
	// 			return DatabaseReturnStatus.EmailTaken;
	// 		}
	// 		// Otherwise insert into the database
	// 		const insertResult = await this.collection!.insertOne(user);
	// 		if (insertResult.insertedCount === 1) {
	// 			return DatabaseReturnStatus.Success;
	// 		}
	// 	} catch (generalError) {
	// 		this.context.Logger.error(
	// 			`[ DTBS SVC ] There was a general error with the insert. ${generalError.message ||
	// 				generalError}`
	// 		);
	// 	}
	// 	return DatabaseReturnStatus.Failure;
	// }

	// /**
	//  * Finds a user account based on the provided email, and updates it.
	//  * @param user The user info to be updated.
	//  */
	// public async updateAccount(
	// 	user: IAccountInfo
	// ): Promise<DatabaseReturnStatus> {
	// 	if (!this.client) {
	// 		await this.connect();
	// 	}
	// 	try {
	// 		const replaceResult = await this.collection!.findOneAndReplace(
	// 			{ email: user.email },
	// 			user
	// 		);
	// 		if (replaceResult.ok) {
	// 			return DatabaseReturnStatus.Success;
	// 		}
	// 	} catch (generalError) {
	// 		this.context.Logger.error(
	// 			`[ DTBS SVC ] There was a general error with the insert. ${generalError.message ||
	// 				generalError}`
	// 		);
	// 	}
	// 	return DatabaseReturnStatus.Failure;
	// }

	// /**
	//  * Finds a user account based on the provided email, and returns it.
	//  * @param humanId The username or email.
	//  * @param isEmail Whether the human id is an email address, if not username will be assumed.
	//  */
	// public async getAccount(
	// 	humanId: string,
	// 	isEmail: boolean
	// ): Promise<IAccountInfo | null> {
	// 	if (!this.client) {
	// 		await this.connect();
	// 	}
	// 	try {
	// 		// Create the filter for our query
	// 		const filter = {} as any;
	// 		if (isEmail) {
	// 			filter.email = humanId;
	// 		} else {
	// 			filter.username = humanId;
	// 		}
	// 		// Return whatever comes back, the caller should handle null exceptions
	// 		return (await this.collection!.findOne(filter)) as IAccountInfo;
	// 	} catch (generalError) {
	// 		this.context.Logger.error(
	// 			`[ DTBS SVC ] There was a general error with the insert. ${generalError.message ||
	// 				generalError}`
	// 		);
	// 		return null;
	// 	}
	// }

	// public async getAllAccounts(): Promise<IAccountInfo[] | null> {
	// 	if (!this.client) {
	// 		await this.connect();
	// 	}
	// 	try {
	// 		const raw = await this.collection!.find({}).toArray();
	// 		const accounts: IAccountInfo[] = [];
	// 		for (const account of raw) {
	// 			if (account as IAccountInfo) {
	// 				accounts.push(account as IAccountInfo);
	// 			} else {
	// 				this.context.Logger.warn(
	// 					`[ DTBS SVC ] Found an non AccountInfo entry while getting all accounts. ${JSON.stringify(
	// 						account
	// 					)}`
	// 				);
	// 			}
	// 		}
	// 		return accounts;
	// 	} catch (generalError) {
	// 		this.context.Logger.error(
	// 			`[ DTBS SVC ] There was a general error with the insert. ${generalError.message ||
	// 				generalError}`
	// 		);
	// 		return null;
	// 	}
	// }
}
