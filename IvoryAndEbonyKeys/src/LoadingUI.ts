class LoadingUI extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createView();
    }

    private _txInfo:egret.TextField;
    private createView():void
    {   
        this._txInfo = new egret.TextField();
        this._txInfo.y = 300;
        this._txInfo.width = 480;
        this._txInfo.height = 100;
        this._txInfo.textAlign = 'center';
    }

    public setProgress(current:number,total:number):void
    {
        this._txInfo.text = `Loading...${current}/${total}`;
    }
}