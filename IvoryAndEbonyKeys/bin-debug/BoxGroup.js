var BoxGroup = (function (_super) {
    __extends(BoxGroup, _super);
    function BoxGroup() {
        _super.call(this);
        // 表示一行中是否有方块被点中
        this._isHit = false;
        this.init();
    }
    var d = __define,c=BoxGroup,p=c.prototype;
    p.init = function () {
        this._boxs = [];
        for (var i = 0; i < GameData.column; i++) {
            var box = new BoxGraphics();
            this._boxs.push(box);
            box.addEventListener(GameEvent.GAMEHIT, this.boxhit, this);
            box.addEventListener(GameEvent.GAMEOVER, this.boxGameOver, this);
            this.addChild(box);
            box.x = GameData.getBoxWidth() * i;
        }
    };
    p.create = function () {
        this._isHit = false;
        var touchIndex = Math.floor(Math.random() * 4);
        var len = this._boxs.length;
        for (var i = 0; i < len; i++) {
            if (i == touchIndex) {
                this._boxs[i].drawBox(true);
            }
            else {
                this._boxs[i].drawBox();
            }
        }
    };
    d(p, "isHit"
        ,function () {
            return this._isHit;
        }
    );
    p.boxhit = function (e) {
        if (!this._isHit) {
            this._isHit = true;
            var event = new GameEvent(GameEvent.GAMEHIT);
            this.dispatchEvent(event);
        }
    };
    p.boxGameOver = function (e) {
        var event = new GameEvent(GameEvent.GAMEOVER);
        this.dispatchEvent(event);
    };
    return BoxGroup;
}(egret.Sprite));
egret.registerClass(BoxGroup,'BoxGroup');
