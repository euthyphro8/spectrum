import Context from '../utils/Context';
import ISession from '../interfaces/ISession';
import { v1 as uuidV1 } from 'uuid';
import ICharacter from '../interfaces/ICharacter';

export default class SessionService {
	private context: Context;
	private sessions: Map<string, ISession>;
	private characters: Map<string, ICharacter[]>;

	public constructor(context: Context) {
		this.context = context;
		this.sessions = new Map<string, ISession>();
		this.characters = new Map<string, ICharacter[]>();
	}

	public createSession(dmId: string, mapId: string): ISession {
		const newSession: ISession = {
			discriminator: 'spectrum.session',
			id: uuidV1(),
			dm: dmId,
			map: mapId,
			players: [],
			spectators: [],
			playerCode: this.generateAlphaNumericCode(4),
			spectatorCode: this.generateAlphaNumericCode(4),
			dateCreated: Date.now(),
		};
		this.sessions.set(newSession.id, newSession);
		return newSession;
	}

	public joinSession(
		userId: string,
		code: string,
		isPlayer: boolean
	): ISession | undefined {
		for (let s of this.sessions.values()) {
			if (isPlayer) {
				if (s.playerCode === code) {
					s.players.push(userId);
					return s;
				}
			} else {
				if (s.spectatorCode === code) {
					s.spectators.push(userId);
					return s;
				}
			}
		}
		return undefined;
	}

	public requestSession(sessionId: string): any {
		return this.sessions.get(sessionId);
	}

	public requestLatestSessionCharcters(
		sessionId: string
	): ICharacter[] | undefined {
		return this.characters.get(sessionId);
	}

	public updateSession(sessionId: string, characters: ICharacter[]): void {
		this.characters.set(sessionId, characters);
	}

	private generateAlphaNumericCode(n: number): string {
		const lb = Math.pow(36, n - 1);
		const ub = Math.pow(36, n) - 1;
		const rn = Math.floor(Math.random() * (ub - lb) + lb);
		return rn.toString(36);
	}
}
