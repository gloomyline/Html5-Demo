class BoxGraphics extends egret.Shape
{
    public constructor()
    {
        super();
        this.init();
    }

    private init()
    {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.click,this);
    }

    private _canTouch:boolean = false;
    private click(e:egret.TouchEvent):void
    {
        // 
        this.graphics.clear();
        if(this._canTouch)
        {
            this.graphics.beginFill(0xcccccc);
        }
        else
        {
            this.graphics.beginFill(0xff0000);
        }
        this.graphics.lineStyle(1,0);
        this.graphics.drawRect(0,0,GameData.getBoxWidth(),GameData.getBoxHeight());
        this.graphics.endFill();

        // 添加底层GameEvent派发
        var event:GameEvent;
        if(!this._canTouch)//不能点击，抛出错误事件
        {
            event = new GameEvent(GameEvent.GAMEOVER);
        }
        else
        {
            event = new GameEvent(GameEvent.GAMEHIT);
        }
        this.dispatchEvent(event);
    }

    public drawBox(canTouch:boolean=false)
    {
        this._canTouch = canTouch;
        this.graphics.clear();
        if(canTouch)
        {
            this.graphics.beginFill(0);
        }
        else
        {
            this.graphics.beginFill(0xffffff);
        }
        this.graphics.lineStyle(1,0);
        this.graphics.drawRect(0,0,GameData.getBoxWidth(),GameData.getBoxHeight());
        this.graphics.endFill();
    }
}