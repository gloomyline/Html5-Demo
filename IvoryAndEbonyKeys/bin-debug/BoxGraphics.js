var BoxGraphics = (function (_super) {
    __extends(BoxGraphics, _super);
    function BoxGraphics() {
        _super.call(this);
        this._canTouch = false;
        this.init();
    }
    var d = __define,c=BoxGraphics,p=c.prototype;
    p.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
    };
    p.click = function (e) {
        // 
        this.graphics.clear();
        if (this._canTouch) {
            this.graphics.beginFill(0xcccccc);
        }
        else {
            this.graphics.beginFill(0xff0000);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
        // 添加底层GameEvent派发
        var event;
        if (!this._canTouch) {
            event = new GameEvent(GameEvent.GAMEOVER);
        }
        else {
            event = new GameEvent(GameEvent.GAMEHIT);
        }
        this.dispatchEvent(event);
    };
    p.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        this.graphics.clear();
        if (canTouch) {
            this.graphics.beginFill(0);
        }
        else {
            this.graphics.beginFill(0xffffff);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
    };
    return BoxGraphics;
}(egret.Shape));
egret.registerClass(BoxGraphics,'BoxGraphics');
