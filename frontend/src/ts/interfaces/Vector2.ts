class Vector2 {
	x: number;
	y: number;
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	public add(x: number, y: number): Vector2 {
		this.x += x;
		this.y += y;
		return this;
	}

	public addV(v: Vector2): Vector2 {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	public sub(x: number, y: number): Vector2 {
		this.x -= x;
		this.y -= y;
		return this;
	}

	public subV(v: Vector2): Vector2 {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	public multiply(s: number): Vector2 {
		this.x *= s;
		this.y *= s;
		return this;
	}

	public divide(s: number): Vector2 {
		this.x /= s;
		this.y /= s;
		return this;
	}

	public floorDivide(s: number): Vector2 {
		this.x = Math.floor(this.x / s);
		this.y = Math.floor(this.y / s);
		return this;
	}
}
export default Vector2;
