import { spawn } from 'child_process';

export default class System {
	public static RestartUpdate(): void {
		spawn('npm', {
			argv0: 'run update',
			detached: true,
			stdio: ['ignore', process.stdout, process.stderr]
		});
	}
}
