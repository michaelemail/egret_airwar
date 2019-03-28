class Shipbulletclass extends egret.Bitmap {
	// fireany : {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 0,"move_y" : -15,"rotation" : 0,}
	public fire : any;

	public constructor(ship:egret.Bitmap,fireany:any) {
        super();
		this.fire = fireany;
		this.texture=(Common.getRes(fireany["pic"]));
		this.x = ship.x + ship.width / 2 - this.$textureWidth / 2 + fireany["satrt_x"];
		this.y = ship.y + this.$textureHeight / 2 + fireany["start_y"];
		this.rotation = fireany["rotation"];
	}
}