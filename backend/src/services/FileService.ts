import path from 'path';
import { promises as fs } from 'fs';
import Context from '../utils/Context';
import IMap, { instanceOfIMap } from '../interfaces/IMap';
import FileHelper from '../utils/FileHelper';
import { DefaultTemplate } from '../assets/DefaultTemplate';
import { DefaultTileRegistry } from '../assets/DefaultTileRegistry';

export default class FileService {
	private context: Context;
	public constructor(context: Context) {
		this.context = context;
	}

	public start(): void {
		this.context.Logger.info(
			`[ FILE SVC ] Attempting to verify store directory ${this.context.Config.StoreDir}.`
		);

		var created = FileHelper.VerifyFolderExists(
			this.context.Config.StoreDir
		);
		created =
			created ||
			FileHelper.VerifyFolderExists(
				path.join(this.context.Config.StoreDir, 'Campaigns')
			);
		created =
			created ||
			FileHelper.VerifyFolderExists(
				path.join(this.context.Config.StoreDir, 'Templates')
			);
		if (created) {
			this.generateDefaults();
		}
	}

	private generateDefaults(): void {
		fs.writeFile(
			this.getTemplatePath('Default.json'),
			JSON.stringify(DefaultTemplate)
		);
		fs.writeFile(
			this.getStorePath('TileRegistry.json'),
			JSON.stringify(DefaultTileRegistry)
		);
	}

	public async getAvailableMap(groupId: string): Promise<IMap[]> {
		const path = this.getMapDir(groupId);
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

	public async getAvailableTemplates(): Promise<IMap[]> {
		const path = this.getTemplateDir();
		const files = await fs.readdir(path);
		let templates: IMap[] = [];
		for (let file of files) {
			this.context.Logger.info(
				`[ FILE SVC ] Found template file ${file}.`
			);
			const data = await fs.readFile(`${path}\\${file}`, {
				encoding: 'utf8'
			});
			const template = JSON.parse(data);
			if (instanceOfIMap(template)) {
				templates.push(template);
			} else {
				this.context.Logger.warn(
					`[ FILE SVC ] Non template file found in the templates folder.`
				);
			}
		}
		return templates;
	}

	private getTemplateDir(): string {
		return path.join(this.context.Config.StoreDir, 'Templates');
	}

	private getTemplatePath(name: string): string {
		return path.format({
			dir: this.getTemplateDir(),
			base: name
		});
	}

	private getStorePath(name: string): string {
		return path.format({
			dir: this.context.Config.StoreDir,
			base: name
		});
	}

	private getMapDir(groupId: string): string {
		return path.join(
			this.context.Config.StoreDir,
			'Campaigns',
			groupId,
			'Maps'
		);
	}

	private getMapPath(groupId: string, name: string): string {
		return path.format({
			dir: this.getMapDir(groupId),
			base: name
		});
	}
}
