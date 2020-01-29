import { Context } from 'vm';

export default class WebService {
	private context: Context;

	public constructor(context: Context) {
		this.context = context;
	}
}
