import { exec } from 'child_process';
import { application } from 'express';

export default class System {
	public static RestartUpdate(): void {
		// exec('npm run update');
		// process.exit(0);
		// exec('npm run update', () => process.exit(0));
		exec('npm run update');
	}
}
