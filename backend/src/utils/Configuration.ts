import path from 'path';
export default class Configuration {
	public readonly Host: string;
	public readonly DbUri: string;
	public readonly LogDir: string;
	public readonly AppDir: string;
	public readonly StoreDir: string;
	public readonly WebPort: string;
	public constructor() {
		this.Host = process.env.Host || '127.0.0.1';
		this.DbUri = process.env.DbUri || 'mongodb://localhost:27017';
		// According to Linux hierarchy standard at http://www.pathname.com/fhs/pub/fhs-2.3.html#THEVARHIERARCHY
		this.AppDir =
			process.platform === 'linux'
				? '/var/lib/spectrum/'
				: path.join(process.env.APPDATA!, 'Spectrum');
		this.LogDir = path.join(this.AppDir, 'Logs');
		this.StoreDir = path.join(this.AppDir, 'Store');
		this.WebPort = process.env.WebPort || '16661';
	}
}
