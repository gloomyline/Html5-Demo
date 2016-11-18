var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (e) {
        // 设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // 移除添加到舞台事件的监听程序
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 初始化Resource资源加载库
        RES.loadConfig('resource/resource.json', 'resource/');
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configComplete, this);
    };
    p.configComplete = function (e) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configComplete, this);
        RES.loadGroup('res');
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.resComplete, this);
    };
    p.resComplete = function (e) {
        if (e.groupName == 'res') {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.resComplete, this);
            // 移除loadingView
            this.stage.removeChild(this.loadingView);
            this.init();
        }
    };
    p.init = function () {
        this._gv = new GameView();
        this._gv.addEventListener(GameEvent.GAMEOVER, this.gameOver, this);
        this.addChild(this._gv);
        this._timer = new egret.Timer(GameData.time, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timers, this);
        this._gameStartPanel = new GameStartPanel();
        this._gameStartPanel.addEventListener(GameEvent.GAMESTART, this.gameStart, this);
        this.addChild(this._gameStartPanel);
        this._gameOverPanel = new GameOverPanel();
        this._gameOverPanel.addEventListener(GameEvent.GAMESTART, this.gameStart, this);
    };
    p.timers = function () {
        this._gv.move();
    };
    p.gameOver = function (e) {
        console.log('game_over');
        this._timer.stop();
        this._gameOverPanel.updateScore();
        this.addChild(this._gameOverPanel);
    };
    p.gameStart = function (e) {
        console.log('game_start');
        GameData.speed = 10;
        GameData.setScore(0);
        this._gv.startGame();
        if (this._gameStartPanel.parent) {
            this.removeChild(this._gameStartPanel);
        }
        if (this._gameOverPanel.parent) {
            this.removeChild(this._gameOverPanel);
        }
        this._timer.start();
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
