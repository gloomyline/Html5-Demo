class GameStartPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private _backgroud:egret.Bitmap;
    private _startBtn:egret.TextField;

    private init()
    {   
        this._backgroud = new egret.Bitmap();
        this._backgroud.texture = RES.getRes('ivoryandebony_png');
        // console.log(RES.getRes('ivoryandebony_png'));
        this._backgroud.width = 480;
        this._backgroud.height = 800; 
        this.addChild(this._backgroud);

        this._startBtn = new egret.TextField();
        this._startBtn.text = '开始';
        this._startBtn.size = 50;
        this._startBtn.textColor = 0xff00ff;
        this._startBtn.x = (GameData.getStageWidth() - this._startBtn.width) * .5;
        this._startBtn.y = 200;
        this._startBtn.touchEnabled = true;
        this.addChild(this._startBtn);
        this._startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.click,this);

    }

    private click(e:egret.TouchEvent):void
    {
        var event:GameEvent = new GameEvent(GameEvent.GAMESTART);
        this.dispatchEvent(event);
    }

}