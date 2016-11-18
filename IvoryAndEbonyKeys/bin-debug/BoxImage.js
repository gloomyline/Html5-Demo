var BoxImage = (function (_super) {
    __extends(BoxImage, _super);
    function BoxImage(texture) {
        if (texture === void 0) { texture = null; }
        _super.call(this, texture);
        this._canTouch = false;
        this.init();
    }
    var d = __define,c=BoxImage,p=c.prototype;
    p.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
    };
    p.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        if (canTouch) {
            this.texture = RES.getRes('woman2');
        }
        else {
            this.texture = RES.getRes('woman1');
        }
    };
    p.click = function (e) {
        if (this._canTouch) {
            this.texture = RES.getRes('woman3');
        }
        var event;
        if (!this._canTouch) {
            event = new GameEvent(GameEvent.GAMEOVER);
        }
        else {
            event = new GameEvent(GameEvent.GAMEHIT);
        }
        this.dispatchEvent(event);
    };
    return BoxImage;
}(egret.Bitmap));
egret.registerClass(BoxImage,'BoxImage');
