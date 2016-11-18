var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=LoadingUI,p=c.prototype;
    p.createView = function () {
        this._txInfo = new egret.TextField();
        this._txInfo.y = 300;
        this._txInfo.width = 480;
        this._txInfo.height = 100;
        this._txInfo.textAlign = 'center';
    };
    p.setProgress = function (current, total) {
        this._txInfo.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
egret.registerClass(LoadingUI,'LoadingUI');
