import Context from '@/utils/Context';
import fs from 'fs';
import IMap from '@/interfaces/IMap';
import { json } from 'express';

export default class FileService {
	private context: Context;
	public constructor(context: Context) {
		this.context = context;
	}

	public start(): void {
	}

	public async getAvailableMaps(groupId: string): Promise<IMap[]> {
		return new Promise<IMap[]>((resolve, reject) => {
			if(!fs.existsSync(this.getMapPath(groupId))) {
				fs.mkdirSync(this.getMapPath(groupId), { recursive: true });
			}
			fs.readdir(this.getMapPath(groupId), (err, files: string[]) => {
				if(err) { 
					this.context.Logger.crit(`[ FILE SVC ] Could not access map files for ${groupId}.`);
					reject();
				}
				else {
					let maps: IMap[] = [];
					for(let file of files) {
						this.context.Logger.info(`[ FILE SVC ] Found file ${file} for ${groupId}.`);
						// TODO this might benefit from async call instead of sync call
						let mapFile = fs.readFileSync(`${this.getMapPath(groupId)}\\${file}`, { encoding: 'utf8' });
						if(mapFile) {
							let map = JSON.parse(mapFile);
							if(map as IMap) {
								maps.push(map);
							}
						}
					}
					resolve(maps);
				}				
			});
		});
	}

	public getMapPath(groupId: string): string {
		return `${this.context.Config.StoreDir}\\${groupId}\\Maps`;
	}

}
