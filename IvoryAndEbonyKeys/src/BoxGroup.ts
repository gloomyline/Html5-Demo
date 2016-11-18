class BoxGroup extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private _boxs:Array<BoxGraphics>;
    private init():void
    {
        this._boxs = [];
        for(var i:number=0;i<GameData.column;i++)
        {
            var box:BoxGraphics = new BoxGraphics();
            this._boxs.push(box);
            box.addEventListener(GameEvent.GAMEHIT,this.boxhit,this);
            box.addEventListener(GameEvent.GAMEOVER,this.boxGameOver,this);
            this.addChild(box);
            box.x = GameData.getBoxWidth()*i;
        }
    }

    public create():void
    {
        this._isHit = false;
        var touchIndex:number = Math.floor(Math.random()*4);
        var len:number = this._boxs.length;
        for(var i:number=0;i<len;i++)
        {
            if(i == touchIndex)
            {
                this._boxs[i].drawBox(true);
            }
            else
            {
                this._boxs[i].drawBox();
            }
        }
    }

    // 表示一行中是否有方块被点中
    private _isHit:boolean = false;
    public get isHit():boolean
    {
        return this._isHit;
    }

    private boxhit(e:GameEvent):void
    {   
        if(!this._isHit)
        {
            this._isHit = true;
            var event:GameEvent = new GameEvent(GameEvent.GAMEHIT);
            this.dispatchEvent(event);
        }
    }

    private boxGameOver(e:GameEvent):void
    {
        var event:GameEvent = new GameEvent(GameEvent.GAMEOVER);
        this.dispatchEvent(event);
    }


}