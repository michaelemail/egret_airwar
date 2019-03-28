// 公共静态方法
class Common {
	public constructor() {
	}
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
	public static createBitmapByName(name: string) {
		let result = new egret.Bitmap();
		let texture: egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}
	// 两个图片对象的碰撞判断
	public static intersectsBitmap(bit1: egret.Bitmap,bit2: egret.Bitmap) {
		let rect1= new egret.Rectangle(bit1.x,bit1.y,bit1.width,bit1.height);
		let rect2= new egret.Rectangle(bit2.x,bit2.y,bit2.width,bit2.height);
		return rect1.intersects (rect2);
	}

	public static getRes(name: string) {
		return RES.getRes(name);
	}
}
