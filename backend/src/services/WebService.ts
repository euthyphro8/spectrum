import Context from '../utils/Context';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import System from '../utils/System';

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

		this.app.get('/requestMaps', this.onMapsRequest.bind(this));
		this.app.get('/requestTemplates', this.onTemplatesRequest.bind(this));
		this.app.get('/loadMap', this.onMapLoad.bind(this));
		this.app.get('/loadTemplate', this.onTemplateLoad.bind(this));

		this.app.post('/webhook', this.onWebhookPayload.bind(this));
	}

	private onMapsRequest(req: Request, res: Response): void {
		let groupId = req.body.groupId as string;
		this.context.Logger.info(
			`[ WEB SVC  ] Got maps request for ${groupId}.`
		);
		res.status(200).send({ maps: ['Dungeon-01', 'Dunegon-02'] });
	}
	private onTemplatesRequest(req: Request, res: Response): void {
		this.context.Logger.info(`[ WEB SVC  ] Got templates request.`);
		res.status(200).send({ templates: [''] });
	}
	private onMapLoad(req: Request, res: Response): void {
		let groupId = req.body.groupId as string;
		let map = req.body.groupId as string;
		this.context.Logger.info(`[ WEB SVC  ] Got map load.`);
		// res.status(200).send({ maps: ['New map'] });
	}
	private onTemplateLoad(req: Request, res: Response): void {
		let template = req.body.template as string;
		this.context.Logger.info(`[ WEB SVC  ] Got template load ${template}.`);
		// res.status(200).send({ maps: ['New map'] });
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
