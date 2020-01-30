import { promises as fs } from 'fs';
import Context from '../utils/Context';
import IMap, { instanceOfIMap } from '../interfaces/IMap';
import ITemplate, { instanceOfITemplate } from '../interfaces/ITemplate';
import { json } from 'express';

export default class FileService {
	private context: Context;
	public constructor(context: Context) {
		this.context = context;
	}

	public start(): void {}

	public async getAvailableMap(groupId: string): Promise<IMap[]> {
		const path = this.getMapPath(groupId);
		const files = await fs.readdir(path);
		let maps: IMap[] = [];
		for (let file of files) {
			this.context.Logger.info(
				`[ FILE SVC ] Found map file ${file} for ${groupId}.`
			);
			const data = await fs.readFile(`${path}\\${file}`, {
				encoding: 'utf8'
			});
			const map = JSON.parse(data);
			if (instanceOfIMap(map)) {
				maps.push(map);
			} else {
				this.context.Logger.warn(
					`[ FILE SVC ] Non map file found in the maps folder for ${groupId}.`
				);
			}
		}
		return maps;
	}

	public async getAvailableTemplates(): Promise<ITemplate[]> {
		const path = this.getTemplatePath();
		const files = await fs.readdir(path);
		let templates: ITemplate[] = [];
		for (let file of files) {
			this.context.Logger.info(
				`[ FILE SVC ] Found template file ${file}.`
			);
			const data = await fs.readFile(`${path}\\${file}`, {
				encoding: 'utf8'
			});
			const template = JSON.parse(data);
			if (instanceOfITemplate(template)) {
				templates.push(template);
			} else {
				this.context.Logger.warn(
					`[ FILE SVC ] Non template file found in the templates folder.`
				);
			}
		}
		return templates;
	}

	private getTemplatePath(): string {
		return `${this.context.Config.StoreDir}\\Templates`;
	}

	private getMapPath(groupId: string): string {
		return `${this.context.Config.StoreDir}\\${groupId}\\Maps`;
	}
}
