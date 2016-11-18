class GameView extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private _boxGroups:Array<BoxGroup>;
    private scoreText:egret.BitmapText;
    private init():void
    {
        this._boxGroups = [];
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++)
        {
            var boxG:BoxGroup = new BoxGroup();
            this._boxGroups.push(boxG);
            this.addChild(boxG);
            boxG.addEventListener(GameEvent.GAMEOVER,this.gameOver,this);
            boxG.addEventListener(GameEvent.GAMEHIT,this.gameHit,this);
        }

        this.scoreText = new egret.BitmapText();
        this.scoreText.font = RES.getRes('number_fnt');

        this.scoreText.x = 180;
        this.scoreText.y = 50;
        this.scoreText.text = String(0);
        this.addChild(this.scoreText);
    }

    public startGame():void
    {
        console.log('gv_game_start');
        this.scoreText.text = String(0);
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++)
        {
            this._boxGroups[i].create();
            this._boxGroups[i].y = 0 - GameData.getBoxHeight()*(i+1);
        }
    }

    public move()
    {
        var len:number=GameData.row + 1;
        for(var i:number=0;i<len;i++)
        {
            this._boxGroups[i].y += GameData.speed;
        }

        for(i=0;i<len;i++)
        {   
            // 当一行的方块移动到舞台外侧了
            if(this._boxGroups[i].y >= GameData.getStageHeight())
            {
                // 如果舞台中所有行都从上往下Move完成后仍然没有方块被点击，即游戏结束
                if(!this._boxGroups[i].isHit)
                {
                    this.gameOver();
                    return;
                }
                
                if(i == 0)
                {
                    this._boxGroups[i].y = this._boxGroups[4].y - GameData.getBoxHeight();
                }
                else
                {
                    this._boxGroups[i].y = this._boxGroups[i-1].y - GameData.getBoxHeight(); 
                }

                this._boxGroups[i].create();
            }          
        }
    }

    private gameOver(e:GameEvent=null):void
    {
        var event:GameEvent = new GameEvent(GameEvent.GAMEOVER);
        this.dispatchEvent(event);
    }

    private gameHit(e:GameEvent):void
    {
        GameData.setScore(GameData.getScore()+1);
        this.scoreText.text = String(GameData.getScore());
    }

}