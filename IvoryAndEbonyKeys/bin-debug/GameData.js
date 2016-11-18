var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    GameData.getScore = function () {
        return GameData.score;
    };
    GameData.setScore = function (val) {
        GameData.score = val;
        GameData.speed = 10 + GameData.score;
    };
    GameData.getBoxWidth = function () {
        if (GameData._boxWidth == 0) {
            GameData._boxWidth = GameData.getStageWidth() / GameData.column;
        }
        return GameData._boxWidth;
    };
    GameData.getBoxHeight = function () {
        if (GameData._boxHeight == 0) {
            GameData._boxHeight = GameData.getStageHeight() / GameData.row;
        }
        return GameData._boxHeight;
    };
    GameData.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    GameData.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    GameData.score = 0;
    GameData.row = 4;
    GameData.column = 4;
    GameData.speed = 10; //黑白键移动速度
    GameData.time = 20; //游戏时间
    GameData._boxWidth = 0;
    GameData._boxHeight = 0;
    return GameData;
}());
egret.registerClass(GameData,'GameData');
