import { config } from 'dotenv';
import AmbientContext from './utils/Context';
import Configuration from './utils/Configuration';
import LoggerService from './services/LoggerService';
import ConnectionService from './services/ConnectionService';
import FileService from './services/FileService';
import WebService from './services/WebService';

// Gets the env vars from the .env file
config();

// Initialization of all Micro Services
var context = new AmbientContext();
const configuration = new Configuration();
const logger = new LoggerService(
	'Spectrum',
	configuration.LogDir,
	10,
	10 * 1024 * 1024
);
const server = new ConnectionService(context);
const file = new FileService(context);
const web = new WebService(context);

// Add all micro-services to the ambient context
context.inject(configuration, logger, server, file, web);

logger.notice(
	`\n ::::::::  :::::::::  :::::::::: :::::::: ::::::::::: :::::::::  :::    ::: ::::    ::::  \n` +
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
		`----------------------------------------------------------\n`
);

(async () => {
	server.start();
	web.start();
})();
