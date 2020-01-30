import Context from '../utils/Context';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

export default class WebService {
	private context: Context;
	private app!: express.Express;

	public constructor(context: Context) {
		this.context = context;
	}
	public start(): void {
		this.app = this.context.Connection.expressApp;
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded( { extended: true }));
		
		this.app.get('/maps', this.onMapRequest.bind(this));
		
		// For github webhook
		this.app.post('/webhook', this.onWebhookPayload.bind(this));
	}

	private onMapRequest(req: Request, res: Response): void {
		let filter = req.body.filter as string;
		this.context.Logger.info(
			`[ WEB SVC  ] Got maps request for ${filter}.`
		);
	}

	private onWebhookPayload(req: Request, res: Response): void {
		try {
			this.context.Logger.info(
				`[ WEB SVC  ] Got webhook payload for ref ${JSON.stringify(req.body)}!`
			);
			res.sendStatus(200);

		} catch {
			this.context.Logger.error(`[ WEB SVC  ] Error in webhook!`);
			res.sendStatus(500);
		}
	}
}
