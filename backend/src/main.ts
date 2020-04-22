import { config } from 'dotenv';
import Context from './utils/Context';
import Configuration from './utils/Configuration';
import LoggerService from './services/LoggerService';
import ConnectionService from './services/ConnectionService';
import DatabaseService from './services/DatabaseService';
import WebService from './services/WebService';
import SessionService from './services/SessionService';

// Gets the env vars from the .env file
config();

// Initialization of all Micro Services
var context = new Context();
const configuration = new Configuration();
const logger = new LoggerService(
	'Spectrum',
	configuration.LogDir,
	10,
	10 * 1024 * 1024
);
const server = new ConnectionService(context);
const db = new DatabaseService(context);
const web = new WebService(context);
const session = new SessionService(context);

// Add all micro-services to the ambient context
context.inject(configuration, logger, server, db, session, web);

logger.notice(
	`\n` +
		` ::::::::  :::::::::  :::::::::: :::::::: ::::::::::: :::::::::  :::    ::: ::::    ::::  \n` +
		`:+:    :+: :+:    :+: :+:       :+:    :+:    :+:     :+:    :+: :+:    :+: +:+:+: :+:+:+ \n` +
		`+:+        +:+    +:+ +:+       +:+           +:+     +:+    +:+ +:+    +:+ +:+ +:+:+ +:+ \n` +
		`+#++:++#++ +#++:++#+  +#++:++#  +#+           +#+     +#++:++#:  +#+    +:+ +#+  +:+  +#+ \n` +
		`       +#+ +#+        +#+       +#+           +#+     +#+    +#+ +#+    +#+ +#+       +#+ \n` +
		`#+#    #+# #+#        #+#       #+#    #+#    #+#     #+#    #+# #+#    #+# #+#       #+# \n` +
		` ########  ###        ########## ########     ###     ###    ###  ########  ###       ### \n` +
		`Node Version:\t\t\t${process.versions.node}\n` +
		`V8 Version:\t\t\t${process.versions.v8}\n` +
		`CPU Architecture:\t\t${process.arch}\n` +
		`Current Platform:\t\t${process.platform}\n` +
		`Process ID:\t\t\t${process.pid}\n` +
		`----------------------------------------------------------`
);

(async () => {
	await db.connect();
	await db.verifyIntegrity();
	server.start();
	web.start();
})();
