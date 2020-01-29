import Context from '@/utils/AmbientContext';

export default class FileService {
	private context: Context;
	public constructor(context: Context) {
		this.context = context;
	}
}
