class GameData
{
    private static score:number = 0;
    public static row:number = 4;
    public static column:number = 4;
    public static speed:number = 10;//黑白键移动速度
    public static time:number = 20;//游戏时间
    
    private static _boxWidth:number = 0;
    private static _boxHeight:number = 0;

    public static getScore():number
    {
        return GameData.score;
    }

    public static setScore(val:number)
    {
        GameData.score = val;
        GameData.speed = 10 + GameData.score;
    }

    public static getBoxWidth():number
    {
        if(GameData._boxWidth == 0){
            GameData._boxWidth = GameData.getStageWidth()/GameData.column;
        }
        return GameData._boxWidth;
    }

    public static getBoxHeight():number
    {
        if(GameData._boxHeight == 0)
        {
            GameData._boxHeight = GameData.getStageHeight()/GameData.row;
        }

        return GameData._boxHeight;
    }

    public static getStageWidth():number
    {
        return egret.MainContext.instance.stage.stageWidth;
    }

    public static getStageHeight():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }

}
