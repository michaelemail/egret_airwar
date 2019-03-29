// 主角机
class Shipclass extends egret.Bitmap {
	private _myMain:Main;
	private _fireSpeed: number = Config.ship["fire_speed"];
	private _fireTime: number = 0;
	private _scoreTF: egret.TextField;
	private _score: number = 0;
	//子弹组
	private _bullet : number = Config.ship["bullet"];
	private _bullet_lv : number = Config.ship["bullet_lv"];
	private _bullets : Shipbulletclass[] = [];

    private _touchStatus:boolean = false;              //当前触摸状态，按下时，值为true
    private _distance:egret.Point = new egret.Point(); //鼠标点击时，鼠标全局坐标与_bird的位置差

    public constructor(_main:Main) {
        super();
		this._myMain = _main;
		this.texture = Common.getRes(Config.ship["pic"]);
		this.width = this.$textureWidth;
		this.height = this.$textureHeight;
		this.x = Config.screenWidth * 0.5 - this.width / 2;
		this.y = Config.screenHeight - this.height - 20;
		// this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame, this);
		this._myMain.addChild(this);

		// 分数
        this._scoreTF = new egret.TextField();
		this._scoreTF.x = Config.score["x"];
        this._scoreTF.y = Config.score["y"];
		this._scoreTF.size = Config.score["size"];
        this._scoreTF.textAlign = Config.score["textAlign"];
		this._scoreTF.textColor = Config.score["textColor"];
		this._scoreTF.text = this._score.toString();

		this._myMain.addChild(this._scoreTF);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
	}
	public addScore(score:number){
		this._score += score;
		this._scoreTF.text = this._score.toString();
	}
	public getBullets(){
		return this._bullets;
	}
	public removeBullet(value:egret.Bitmap,index:number){
		this._myMain.removeChild(value);
		this._bullets.splice(index,1);
	}
    private mouseDown(evt:egret.TouchEvent){
        //console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.x;
        this._distance.y = evt.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent){
        if( this._touchStatus){
            //console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            this.x = evt.stageX - this._distance.x;
            this.y = evt.stageY - this._distance.y;
        }
    }

    private mouseUp(evt:egret.TouchEvent){
        //console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    public onEnterFrame(event: egret.Event) {
		//egret.getTimer(); 为毫秒级
		if (egret.getTimer() - this._fireTime >= this._fireSpeed){
			this._fireTime = egret.getTimer();
			let tmpfire = Config.shipBullet[this._bullet][this._bullet_lv]["fire"];

			for (let fire of tmpfire) {
				let tmpb = new Shipbulletclass(this,fire);
				this._bullets.push(tmpb);
				this.parent.addChild(tmpb);
				// console.log(this._bullets.length);
			}
		}
		this._bullets.forEach((value,index,array)=>{
				value.x += value.fire["move_x"];
				value.y += value.fire["move_y"];

				if (value.y + value.height <=0){
					this.removeBullet(value,index)
				}
			}
		);
		
    }
	// 检察主角的子弹
	public checkBullets(){
		// console.log(this._myMain._alien);
		let ishit:boolean;
		this._bullets.forEach((v1,i1,a1)=>{
			ishit = false;
			this._myMain._alien.getAliens().forEach((v2,i2,a2)=>{
				if (ishit==false && Common.intersectsBitmap(v1,v2)){
					this.addScore(Config.alien["point"]);
					this.removeBullet(v1,i1);
					this._myMain._alien.abaLife(i2,50);
					// this._myMain._alien.removeAlien(v2,i2,1);
					ishit = true;
				}
			});
		});
	}

}