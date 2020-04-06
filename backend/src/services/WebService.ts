import Context from '../utils/Context';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import System from '../utils/System';
import { instanceOfIMap } from '../interfaces/IMap';
import ICampaign, { instanceOfICampaign } from '../interfaces/ICampaign';

export default class WebService {
	private context: Context;
	private app!: express.Express;

	public constructor(context: Context) {
		this.context = context;
	}
	public start(): void {
		this.app = this.context.Connection.expressApp;
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));

		this.app.get('/requestCampaigns', this.onCampaignsRequest.bind(this));
		this.app.post('/createCampaign', this.onCampaignCreation.bind(this));

		this.app.get('/requestTemplates', this.onTemplatesRequest.bind(this));

		this.app.get('/requestMaps', this.onMapsRequest.bind(this));
		this.app.post('/saveMap', this.onSaveMap.bind(this));

		this.app.get('/requestTiles', this.onTilesRequest.bind(this));

		this.app.post('/webhook', this.onWebhookPayload.bind(this));
	}

	private onCampaignsRequest(req: Request, res: Response): void {
		let user = req.query.user as string;
		this.context.Logger.info(
			`[ WEB SVC  ] Got campaign request for ${user}.`
		);
		this.context.Db.getAllCampaigns(user)
			.then((campaigns) => {
				this.context.Logger.info(
					`[ WEB SVC  ] Sending campaigns back.`
				);
				res.status(200).send({ campaigns });
			})
			.catch(() => res.sendStatus(500));
	}

	private onCampaignCreation(req: Request, res: Response): void {
		let campaign = req.query.campaign as ICampaign;

		if (instanceOfICampaign(campaign)) {
			this.context.Logger.info(
				`[ WEB SVC  ] Got add campaign request for ${campaign.name}.`
			);
			this.context.Db.createCampaign(campaign)
				.then(() => {
					this.context.Logger.info(
						`[ WEB SVC  ] Campaign was successfully created.`
					);
					res.sendStatus(200);
				})
				.catch(() => res.sendStatus(500));
		} else {
			this.context.Logger.warn(
				`[ WEB SVC  ] Got malformed campaign request.`
			);
			res.sendStatus(300);
		}
	}

	private onTemplatesRequest(req: Request, res: Response): void {
		this.context.Logger.info(`[ WEB SVC  ] Got templates request.`);
		this.context.Db.getAllTemplates()
			.then((templates) => {
				this.context.Logger.info(
					`[ WEB SVC  ] Sending templates back.`
				);
				res.status(200).send({ templates });
			})
			.catch(() => res.sendStatus(500));
	}

	private onMapsRequest(req: Request, res: Response): void {
		let groupId = req.query.groupId as string;
		this.context.Logger.info(
			`[ WEB SVC  ] Got maps request for ${groupId}.`
		);
		this.context.Db.getAllMaps()
			.then((maps) => {
				this.context.Logger.info(`[ WEB SVC  ] Sending maps back.`);
				res.status(200).send({ maps });
			})
			.catch(() => res.sendStatus(500));
	}

	private onSaveMap(req: Request, res: Response): void {
		let groupId = req.body.groupId as string;
		let map = req.body.map;
		if (instanceOfIMap(map)) {
			this.context.Logger.info(
				`[ WEB SVC  ] Got add map request for ${groupId}.`
			);
			this.context.Db.saveMap(map)
				.then(() => {
					this.context.Logger.info(
						`[ WEB SVC  ] Map was successfully saved.`
					);
					res.sendStatus(200);
				})
				.catch(() => res.sendStatus(500));
		} else {
			this.context.Logger.warn(
				`[ WEB SVC  ] Got malformed map request for ${groupId}.`
			);
			res.sendStatus(300);
		}
	}

	private onTilesRequest(req: Request, res: Response): void {
		this.context.Logger.info(`[ WEB SVC  ] Got tiles request.`);
		this.context.Db.getAllTiles()
			.then((tiles) => {
				this.context.Logger.info(`[ WEB SVC  ] Sending tiles back.`);
				res.status(200).send({ tiles });
			})
			.catch(() => res.sendStatus(500));
	}

	private onWebhookPayload(req: Request, res: Response): void {
		const ref = req.body.ref;
		this.context.Logger.info(
			`[ WEB SVC  ] Got webhook payload for ref ${ref}!`
		);

		if (ref === 'refs/heads/master') {
			this.context.Logger.info(
				`[ WEB SVC  ] Got webhook on master branch, updating.`
			);
			System.RestartUpdate();
		}
		res.sendStatus(200);
	}
}
