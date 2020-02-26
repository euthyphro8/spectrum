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

		this.app.get('/requestTiles', this.onTilesRequest.bind(this));
		this.app.get('/requestMaps', this.onMapsRequest.bind(this));
		this.app.get('/requestTemplates', this.onTemplatesRequest.bind(this));
		this.app.post('/webhook', this.onWebhookPayload.bind(this));
	}

	private onTilesRequest(req: Request, res: Response): void {
		this.context.Logger.info(`[ WEB SVC  ] Got tiles request.`);
		this.context.Db.getAllTiles()
			.then((tiles) => {
				this.context.Logger.info(`[ WEB SVC  ] Sending tiles back.`);
				res.status(200).send({ tiles });
			})
			.catch(() => res.status(500));
	}

	private onMapsRequest(req: Request, res: Response): void {
		let groupId = req.query.groupId as string;
		this.context.Logger.info(
			`[ WEB SVC  ] Got maps request for ${groupId}.`
		);
		// this.context.Files.getAvailableMaps(groupId)
		this.context.Db.getAllMaps()
			.then((maps) => {
				this.context.Logger.info(`[ WEB SVC  ] Sending maps back.`);
				res.status(200).send({ maps });
			})
			.catch(() => res.status(500));
	}

	private onTemplatesRequest(req: Request, res: Response): void {
		this.context.Logger.info(`[ WEB SVC  ] Got templates request.`);
		// this.context.Files.getAvailableTemplates()
		this.context.Db.getAllTemplates()
			.then((templates) => {
				this.context.Logger.info(
					`[ WEB SVC  ] Sending templates back.`
				);
				res.status(200).send({ templates });
			})
			.catch(() => res.status(500));
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
