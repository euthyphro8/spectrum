import { MongoClient, Db, Collection } from 'mongodb';
import Context from '../utils/Context';
import IMap, { instanceOfIMap, getDefaultMap } from '../interfaces/IMap';
import ITile, { instanceOfITile } from '../interfaces/ITile';
import { DefaultTileRegistry } from '../assets/DefaultTileRegistry';
import ICampaign, {
	instanceOfICampaign,
	getDefaultCampaign,
} from '../interfaces/ICampaign';
import IUser, { getDefaultUser, instanceOfIUser } from '../interfaces/IUser';

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

				this.tiles = this.database.collection('tiles');
				this.templates = this.database.collection('templates');
				this.maps = this.database.collection('maps');
				this.campaigns = this.database.collection('campaigns');
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
		var tiles = await this.getAllTiles();
		if (tiles.length <= 0) this.tiles.insertMany(DefaultTileRegistry.tiles);

		var temps = await this.getAllTemplates();
		if (temps.length <= 0) this.templates.insertOne(getDefaultMap());

		var maps = await this.getAllMaps('*');
		if (temps.length <= 0) this.maps.insertOne(getDefaultMap());

		var camps = await this.getAllCampaigns('*');
		if (camps.length <= 0) this.campaigns.insertOne(getDefaultCampaign());

		var users = await this.getAllUsers();
		if (users.length <= 0) this.users.insertOne(getDefaultUser());
	}

	/**
	 * Gets all the tiles from the tiles database.
	 */
	public async getAllTiles(): Promise<ITile[]> {
		try {
			const raw = await this.tiles!.find({}).toArray();
			const tiles: ITile[] = [];
			for (const tile of raw) {
				delete tile._id;
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
				this.context.Logger.debug(
					`[ DTBS SVC ] RAW: ${JSON.stringify(template)}`
				);
				delete template._id;
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
	 * Gets all the users from the user database.
	 */
	public async getAllUsers(): Promise<IUser[]> {
		try {
			const raw = await this.users!.find({}).toArray();
			const users: IUser[] = [];
			for (const user of raw) {
				delete user._id;
				if (instanceOfIUser(user)) users.push(user);
				else
					throw new Error(
						`[ DTBS SVC ] Got non-user back from users database.`
					);
			}
			return users;
		} catch (generalError) {
			this.context.Logger.error(
				`[ DTBS SVC ] There was a general error with getting campaigns. 
                    ${generalError.message || generalError}`
			);
			throw generalError;
		}
	}

	/**
	 * Gets all the campaigns associated to the user id given.
	 * @param userId The user uuid, can take wildcard to get all campaigns regardless
	 * of user association.
	 */
	public async getAllCampaigns(userId: string): Promise<ICampaign[]> {
		try {
			const query = userId === '*' ? {} : { user: userId };
			const raw = await this.campaigns!.find(query).toArray();
			const campaigns: ICampaign[] = [];
			for (const campaign of raw) {
				delete campaign._id;
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
			// TODO: This will overwrite any campaign with an ID that happens to match
			// obviously this could be terrible. Unlikely to happen, but a safeguard
			// should eventually be put into place.
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
	 * Gets all the maps associated to the campaign id given.
	 * @param campaignId The campaign uuid, can take wildcard to get all maps regardless
	 * of campaign association.
	 */
	public async getAllMaps(campaignId: string): Promise<IMap[]> {
		try {
			const query = campaignId === '*' ? {} : { campaign: campaignId };
			const raw = await this.maps!.find(query).toArray();
			const maps: IMap[] = [];
			for (const map of raw) {
				delete map._id;
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
					id: map.id,
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
}
