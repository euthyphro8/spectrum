export default class Configuration {
	public readonly Host: string;
	public readonly DbUri: string;
	public readonly LogDir: string;
	public readonly StoreDir: string;
	public readonly WebPort: string;
	public constructor() {
		this.Host = process.env.Host || '127.0.0.1';
		this.DbUri = process.env.DbUri || 'mongodb://localhost:27017';
		this.LogDir =
		(process.env.APPDATA || '\\srv\\') + '\\Spectrum\\Logs';
		this.StoreDir = (process.env.APPDATA || '\\srv\\') + '\\Spectrum\\Store';
		this.WebPort = process.env.WebPort || '16661';
	}
}
