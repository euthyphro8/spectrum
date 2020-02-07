import Winston from 'winston';
import FileHelper from '../utils/FileHelper';
import path from 'path';

/**
 * Log levels in accordance with the Syslog Protocol
 * https://tools.ietf.org/html/rfc5424
 */

type LogLevel =
	| 'debug'
	| 'info'
	| 'notice'
	| 'warn'
	| 'error'
	| 'crit'
	| 'alert'
	| 'emerg';

class LoggerService {
	public info(message: string): void {
		this.log('info', message);
	}

	public debug(message: string): void {
		this.log('debug', message);
	}

	public notice(message: string): void {
		this.log('notice', message);
	}

	public warn(message: string): void {
		this.log('warn', message);
	}

	public error(message: string): void {
		this.log('error', message);
	}

	public crit(message: string): void {
		this.log('crit', message);
	}

	public alert(message: string): void {
		this.log('alert', message);
	}

	public emerg(message: string): void {
		this.log('emerg', message);
	}

	private logger: Winston.Logger;

	constructor(
		logName: string,
		filename: string,
		maxFiles: number,
		maxSize: number
	) {
		console.log('\n-- LOGGER INITIALIZED --');
		FileHelper.VerifyFolderExists(filename);
		const customLevels = {
			levels: {
				// Levels in accordance with rfc5424 https://tools.ietf.org/html/rfc5424
				emerg: 0, // 0  Emergency: system is unusable
				alert: 1, // 1  Alert: action must be taken immediately
				crit: 2, // 2  Critical: critical conditions
				error: 3, // 3  Error: error conditions
				warn: 4, // 4  Warning: warning conditions
				notice: 5, // 5  Notice: normal but significant condition
				info: 6, // 6  Informational: informational messages
				debug: 7 // 7  Debug: debug-level messages
			},
			colors: {
				emerg: 'black whiteBG',
				alert: 'white yellowBG',
				crit: 'white redBG',
				error: 'red',
				warn: 'yellow',
				notice: 'magenta',
				info: 'cyan',
				debug: 'green'
			}
		};

		const customPrint = Winston.format.printf(
			({ label, level, message, timestamp }) => {
				let msg = level;
				msg = msg.replace(
					'emerg',
					`[${timestamp}][ ${label} ][ EMERG ]${message}`
				);
				msg = msg.replace(
					'alert',
					`[${timestamp}][ ${label} ][ ALERT ]${message}`
				);
				msg = msg.replace(
					'crit',
					`[${timestamp}][ ${label} ][ CRIT  ]${message}`
				);
				msg = msg.replace(
					'error',
					`[${timestamp}][ ${label} ][ ERROR ]${message}`
				);
				msg = msg.replace(
					'warn',
					`[${timestamp}][ ${label} ][ WARN  ]${message}`
				);
				msg = msg.replace('notice', `${message}`);
				msg = msg.replace(
					'info',
					`[${timestamp}][ ${label} ][ INFO  ]${message}`
				);
				msg = msg.replace(
					'debug',
					`[${timestamp}][ ${label} ][ DEBUG ]${message}`
				);
				return msg;
			}
		);

		this.logger = Winston.createLogger({
			levels: customLevels.levels,
			exitOnError: false,
			defaultMeta: {
				service: 'user-service'
			},
			transports: [
				new Winston.transports.File({
					filename: path.resolve(filename, `${logName}.log`),
					maxFiles: maxFiles,
					maxsize: maxSize,
					handleExceptions: false,
					zippedArchive: false,
					format: Winston.format.combine(
						Winston.format.label({
							label: logName
						}),
						Winston.format.timestamp({
							format: `MM/DD/YY HH:mm:ss`
						}),
						Winston.format.uncolorize(),
						Winston.format.splat(),
						customPrint
					)
				}),
				new Winston.transports.Console({
					format: Winston.format.combine(
						Winston.format.label({
							label: logName
						}),
						Winston.format.timestamp({
							format: `MM/DD/YY HH:mm:ss`
						}),
						Winston.format.colorize({
							all: true,
							colors: customLevels.colors
						}),
						Winston.format.splat(),
						customPrint
					)
				})
			]
		});
		this.logger.level = 'debug';
	}

	private log(type: LogLevel, message: string): void {
		this.logger.log(type, message);
	}
}

export default LoggerService;
