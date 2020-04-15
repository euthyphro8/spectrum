import ConnectionService from '@/services/ConnectionService';
import WebService from '@/services/WebService';
import LoggerService from '@/services/LoggerService';
import Configuration from '@/utils/Configuration';
import DatabaseService from '@/services/DatabaseService';
import SessionService from '@/services/SessionService';

export default class Context {
	private _Config!: Configuration;
	get Config(): Configuration {
		if (this.injected) return this._Config;
		else throw new Error('Accessing ambient context before injection.');
	}

	private _Db!: DatabaseService;
	get Db(): DatabaseService {
		if (this.injected) return this._Db;
		else throw new Error('Accessing ambient context before injection.');
	}

	private _Connection!: ConnectionService;
	get Connection(): ConnectionService {
		if (this.injected) return this._Connection;
		else throw new Error('Accessing ambient context before injection.');
	}

	private _Session!: SessionService;
	get Session(): SessionService {
		if (this.injected) return this._Session;
		else throw new Error('Accessing ambient context before injection.');
	}

	private _Web!: WebService;
	get Web(): WebService {
		if (this.injected) return this._Web;
		else throw new Error('Accessing ambient context before injection.');
	}

	private _Logger!: LoggerService;
	get Logger(): LoggerService {
		if (this.injected) return this._Logger;
		else throw new Error('Accessing ambient context before injection.');
	}

	private injected: boolean;

	public constructor() {
		this.injected = false;
	}

	public inject(
		config: Configuration,
		logger: LoggerService,
		connection: ConnectionService,
		db: DatabaseService,
		session: SessionService,
		web: WebService
	): void {
		this._Config = config;
		this._Logger = logger;
		this._Connection = connection;
		this._Session = session;
		this._Db = db;
		this._Web = web;
		this.injected = true;
	}
}
