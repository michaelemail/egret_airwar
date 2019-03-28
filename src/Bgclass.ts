class Bgclass{
	private _myBitMaps:egret.Bitmap[]=[];
    public constructor(_main:Main) {
		for(let i=0;i<=1;i++){
			let tmpbit = Common.createBitmapByName(Config.bgPic);
			tmpbit.x = 0;
			tmpbit.y = -1 * i * Config.screenHeight;
			tmpbit.width = Config.screenWidth;
			tmpbit.height = Config.screenHeight;
			this._myBitMaps[i] = tmpbit;
			_main.addChild(this._myBitMaps[i]);
		}
	}
    public onEnterFrame(event: egret.Event) {
        this._myBitMaps.forEach((value,index,array)=>{
				value.y += Config.bgSpeed;
				if (value.y >= Config.screenHeight){
					value.y = -1 * Config.screenHeight + (value.y - Config.screenHeight)
				}
			}
		);

    }
}