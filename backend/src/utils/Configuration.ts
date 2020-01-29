export default class Configuration {
	public readonly Host: string;
	public readonly DbUri: string;
	public readonly LogDir: string;
	public readonly WebPort: string;
	public constructor() {
		this.Host = process.env.Host || '127.0.0.1';
		this.DbUri = process.env.DbUri || 'mongodb://localhost:27017';
		this.LogDir =
			process.env.APPDATA + (process.env.LogDir || '\\Spectrum');
		this.WebPort = process.env.WebPort || '16661';
	}
}
