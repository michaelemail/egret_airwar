// 爆炸·
class Animationclass {
	private _mydata = Common.getRes("Explode_mc_json");
	private _mytxtr = Common.getRes("Explode_tex_png");
	private _mcFactory:egret.MovieClipDataFactory;
	private _myMain:Main;
    public constructor(_main:Main) {
		this._myMain = _main;
		this._mcFactory = new egret.MovieClipDataFactory(this._mydata, this._mytxtr);
	}
	public buildAni(x:number,y:number,aniName:string){
		let aniconf = Config.animation[aniName];
        let mc1:egret.MovieClip = new egret.MovieClip( this._mcFactory.generateMovieClipData(aniconf["mcname"]) );
        mc1.x = x;
        mc1.y = y;
        this._myMain.addChild(mc1);
		mc1.gotoAndPlay(aniconf["frame"],1);
        mc1.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
            this._myMain.removeChild(mc1);
            mc1 = null;
        }, this);
	}
}