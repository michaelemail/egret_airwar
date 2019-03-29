class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        /*
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        */
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);
        
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            // await RES.loadGroup("bg", 0, loadingView);
            for (let val of Config.RESGroup) {
                await RES.loadGroup(val, 0, loadingView);
            }
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    // 场景组
    private _bgclass : Bgclass;
    public _ship : Shipclass;
    public _alien : Alienclass;
    public _animation : Animationclass;
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        // 背景
        this._bgclass = new Bgclass(this);
        // 飞船
        this._ship = new Shipclass(this);
        // 小兵
        this._alien = new Alienclass(this);
        // 动作
        this._animation = new Animationclass(this);

        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame, this);
        
        // this._animation.buildAni(100,100,"Explode_exp1");
    }
    // 主循环
    private onEnterFrame(event: egret.Event) {
        this._bgclass.onEnterFrame(event);
        this._ship.checkBullets();
        this._ship.onEnterFrame(event);
        this._alien.onEnterFrame(event);
    }
}