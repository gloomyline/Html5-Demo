class BoxImage extends egret.Bitmap
{
    public constructor(texture:egret.Texture=null)
    {
        super(texture);
        this.init();
    }

    private init()
    {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.click,this);

        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
    }

    private _canTouch:boolean = false;
    public drawBox(canTouch:boolean=false)
    {
        this._canTouch = canTouch;
        if(canTouch)
        {
            this.texture = RES.getRes('woman2');
        }
        else
        {
            this.texture = RES.getRes('woman1');
        }
    }

    private click(e:egret.TouchEvent):void
    {
        if(this._canTouch)
        {
            this.texture = RES.getRes('woman3');
        }
        
        var event:GameEvent;
        if(!this._canTouch)
        {
            event = new GameEvent(GameEvent.GAMEOVER);
        }
        else
        {
            event = new GameEvent(GameEvent.GAMEHIT);
        }
        this.dispatchEvent(event);
    }
}