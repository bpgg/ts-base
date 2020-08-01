"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Heng = /** @class */ (function () {
    function Heng(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Heng.prototype.find = function () {
        console.log('找朋友');
    };
    return Heng;
}());
var hengObj = new Heng('heng', 18, 'coding');
hengObj.find();
var XiaoHeng = /** @class */ (function (_super) {
    __extends(XiaoHeng, _super);
    function XiaoHeng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weight = 60;
        return _this;
    }
    XiaoHeng.prototype.earn = function () {
        console.log('一天赚了好几万');
    };
    // 重写父类的方法
    XiaoHeng.prototype.find = function () {
        _super.prototype.find.call(this);
        console.log("找很多朋友");
    };
    return XiaoHeng;
}(Heng));
var xiaoheng = new XiaoHeng('小恒', 24, '空军');
xiaoheng.find();
xiaoheng.earn();
