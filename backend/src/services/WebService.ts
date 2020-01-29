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
		this.app.get('/maps', this.onMapRequest.bind(this));
	}

	private onMapRequest(req: Request, res: Response): void {
		let filter = req.body.filter as string;
	}
}
