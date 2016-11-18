class GameOverPanel extends egret.Sprite
{
    public constructor(){
        super();
        this.init();
    }

    private _scoreText:egret.TextField;
    private _background:egret.Bitmap;
    private _startBtn:egret.TextField;
    private _gameOverText:egret.TextField;

    private init():void
    {
        this._background = new egret.Bitmap();
        this._background.texture = RES.getRes('ivoryandebony_png');
        this._background.width = GameData.getStageWidth();
        this._background.height = GameData.getStageHeight();
        this.addChild(this._background);

        this._scoreText = new egret.TextField();
        this._scoreText.text = '分数：' + GameData.getScore();
        this._scoreText.textColor = 0xff0000;
        this._scoreText.size = 50;
        this._scoreText.x = 150;
        this._scoreText.y = 50;
        this.addChild(this._scoreText);

        this._startBtn = new egret.TextField();
        this._startBtn.text = '重玩';
        this._startBtn.textColor = 0xff00ff;
        this._startBtn.size = 40;
        this._startBtn.x = (GameData.getStageWidth() - this._startBtn.width) * .5;
        this._startBtn.y = 200;
        this._startBtn.touchEnabled = true;
        this._startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touch,this);
        this.addChild(this._startBtn);

        this._gameOverText = new egret.TextField();
        this._gameOverText.text = 'GameOver!';
        this._gameOverText.size = 60;
        this._gameOverText.textColor = 0xff0000;
        this._gameOverText.x = (GameData.getStageWidth() - this._gameOverText.width) * .5;
        this._gameOverText.y = 400;
        this.addChild(this._gameOverText);
    }

    public updateScore():void
    {
        this._scoreText.text = '分数：' + GameData.getScore();
    }

    private touch(e:egret.TouchEvent):void
    {
        var event:GameEvent = new GameEvent(GameEvent.GAMESTART);
        this.dispatchEvent(event);
        console.log('play_again');
    }
}