import { promises as fs } from 'fs';

export default class FileHelper {
	public static async VerifyFolderExists(path: string): Promise<boolean> {
		return fs
			.access(path)
			.then(() => true)
			.catch(() => fs.mkdir(path, { recursive: true }).then(() => false));
	}
}
