// External Dependencies
import express from 'express';
import http from 'http';
import io from 'socket.io';

// Internal Dependencies
import AmbientContext from '../utils/AmbientContext';
import MessageTypes from '../utils/MessageTypes';

class ConnectionService {
	public ioServer: io.Server;

	private context: AmbientContext;
	private expressApp: express.Express;
	private httpServer: http.Server;
	private sockets: Map<string, io.Socket>;

	constructor(context: AmbientContext) {
		this.context = context;
		this.sockets = new Map<string, io.Socket>();
		this.expressApp = express();
		this.httpServer = http.createServer(this.expressApp);
		this.ioServer = io(this.httpServer);
	}

	public start(): void {
		this.expressApp.use(express.static('public'));
		this.ioServer.on('connect', this.onConnection.bind(this));
		this.httpServer.listen(this.context.Config.WebPort);
		this.context.Logger.info(
			`[ CONN SVC ] Socket server started on port ${this.context.Config.WebPort}.`
		);
	}

	private onConnection(socket: io.Socket): void {
		socket.emit(MessageTypes.IdRequest, (clientId: string) => {
			this.context.Logger.info(
				`[ CONN SVC ] Client [${clientId}] connected from [${socket.handshake.address}].`
			);
			this.sockets.set(clientId, socket);
			socket.once('disconnect', reason => {
				this.context.Logger.debug(
					`[ CONN SVC ] Client [${clientId}] disconnected, reason: ${reason}.`
				);
				this.sockets.delete(clientId);
			});
		});
	}
}

export default ConnectionService;
