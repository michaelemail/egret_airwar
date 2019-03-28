// 公共静态设置
class Config {
    public static className:string = "Config";
    public static RESGroup:string[] =[
        "bg","ship","bullet","boss","alien","animation"
    ];
    //===== 场景 =====
    public static screenWidth:number = 512;
    public static screenHeight:number = 768;

    public static bgPic:string = "bg0_jpg";
    public static bgSpeed:number = 1;
    // 自动开火
    // public static autoFire:Boolean = true;

    // ===== 外星人设置 =====
    public static alien : { [key: string]: any ; }={
        "pic":'alien1_png',
        "point": 50,
        "speen_x":2,
        "speen_y":5,
        "build_speen":1000 / 5 , //毫秒为单位
    }
    // ===== 飞船设置 =====
    public static ship:{ [key: string]: any ; }={
        "pic" : "ship1_png",
        "moving_point" : 5,
        "fire_speed" : 1000 / 5, //毫秒为单位
        "bullet" : 1,
        "bullet_lv" : 2,
    };
    // ===== 分数设置 =====
    public static score:{ [key: string]: any ; }={
        "x":20,
        "y":10,
        "size":18,
        "textAlign":"left",
        "textColor":0xffffff,
    }
    // ===== 动画设置 =====
    public static animation:{ [key: string]: any ; }={
        "data":"Explode_mc_json",
        "txtr":"Explode_tex_png",
        "Explode_exp1" : {"mcname":"Explode1","frame":"exp1"},
    };
    // 飞船子弹
	public static shipBullet :{ [key: number]: any ; } = {
        // type 1
        1 : {
            // lv 1
            1 : {
                // 子弹分配
                "fire" : [
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 0,"move_y" : -15,"rotation" : 0,},
                ]
            },
            2 : {
                "fire" : [
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 0,"move_y" : -15,"rotation" : 0,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : -3,"move_y" : -15,"rotation" : -10,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 3,"move_y" : -15,"rotation" : 10,},
                ]
            },
            3 : {
                "fire" : [
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 0,"move_y" : -15,"rotation" : 0,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : -3,"move_y" : -15,"rotation" : -10,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 3,"move_y" : -15,"rotation" : 10,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : -6,"move_y" : -15,"rotation" : -15,},
                    {"pic" : "bullet1_png","satrt_x" : 0,"start_y" : 0,"move_x" : 6,"move_y" : -15,"rotation" : 15,},
                ]
            }
        }
    }

    public constructor() {

    }
}
