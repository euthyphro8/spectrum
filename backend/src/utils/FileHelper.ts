import fs from 'fs';
import path from 'path';

export default class FileHelper {
	public static VerifyFolderExists(dir: string): boolean {
		// if (!dir.endsWith(path.sep)) dir = dir + path.sep;
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
			return true;
		} else return false;
		// return new Promise((resolve, reject) => {
		// fs.access(dir, err => {
		// 	if (err) {
		// 		try {
		// 			fs.mkdirSync(dir, { recursive: true });
		// 			resolve(true);
		// 		} catch (error) {
		// 			console.error(
		// 				`Could not make folder ${dir}.\n${error}`
		// 			);
		// 			reject();
		// 		}
		// 	}
		// 	resolve(false);
		// });
		// });
	}
}
