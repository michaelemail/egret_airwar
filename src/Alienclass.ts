// 敌人小兵
class Alienclass {
	private _myBitMaps:egret.Bitmap[]=[];
	private _myConfigs:any[]=[];
	private _BuildTime: number = 0;
	private _myMain:Main;
    public constructor(_main:Main) {
		this._myMain = _main;
	}
	public getAliens(){
		return this._myBitMaps;
	}
	// 小兵死亡 isExp
	public removeAlien(value:egret.Bitmap,index:number,isExp = 0){
		// 添加爆炸效果
		if (isExp == 1){
			this._myMain._animation.buildAni(value.x + value.width / 2 ,value.y + value.height / 2,"Explode_exp1");
		}
		this._myMain.removeChild(value);
		this._myBitMaps.splice(index,1);
		this._myConfigs.splice(index,1);
	}
    public onEnterFrame(event: egret.Event) {
		if (egret.getTimer() - this._BuildTime >= Config.alien["build_speen"]){
			this._BuildTime = egret.getTimer();
			let tmpb = Common.createBitmapByName(Config.alien["pic"]);
			
			tmpb.x = Config.screenWidth * Math.random();
			tmpb.y = -1 * tmpb.height;
			this._myBitMaps.push(tmpb);
			this._myConfigs.push(
				{
					// 是否过了半屏，是的话走左边
					"direction" : tmpb.x > Config.screenWidth / 2,
					"speen_x" : Config.alien["speen_x"] + Math.random() * 2,
					"speen_y" : Config.alien["speen_y"] + Math.random() * 2,
				}
			);
			this._myMain.addChild(tmpb);
			//console.log(this._myBitMaps.length);
			//console.log(this._myConfigs.length);
		}
		
        this._myBitMaps.forEach((value,index,array)=>{
				let conf = this._myConfigs[index];
				if (conf["direction"]){
					value.x -= conf["speen_x"];
				}else{
					value.x += conf["speen_x"];
				}
				
				value.y += conf["speen_y"];
				if (value.y >= Config.screenHeight){
					this.removeAlien(value,index,0);
				}

			}
		);
	
    }
}