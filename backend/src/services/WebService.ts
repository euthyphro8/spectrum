import Context from '../utils/Context';
import express, { Request, Response } from 'express';
import { json } from 'body-parser';

export default class WebService {
	private context: Context;
	private app!: express.Express;

	public constructor(context: Context) {
		this.context = context;
	}
	public start(): void {
		this.app = this.context.Connection.expressApp;
		this.app.use(json);
		this.app.get('/requestMaps', this.onMapsRequest.bind(this));
		this.app.get('/requestTemplates', this.onTemplatesRequest.bind(this));
		this.app.get('/loadMap', this.onMapLoad.bind(this));
		this.app.get('/loadTemplate', this.onTemplateLoad.bind(this));
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
		res.status(200).send({ maps: ['New map'] });
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
}
