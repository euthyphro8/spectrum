import { spawn } from 'child_process';

export default class System {
	public static RestartUpdate(): void {
		spawn('npm run update', {
			detached: true,
			stdio: ['ignore', process.stdout, process.stderr]
		});
	}
}
