"use strict";
function doWork(workType) {
    return "\u5DE5\u4F5C\u7C7B\u578B\uFF1A" + workType;
}
var workType = '前端开发';
var workRes = doWork(workType);
// 可选参数, 添加 ?
// 默认参数, = ""
function eat(foodType, price) {
    if (foodType === void 0) { foodType = "葡萄"; }
    var res = '';
    res = "\u7F8E\u597D\u7684\u98DF\u7269\uFF1A" + foodType;
    if (!!price) {
        res += ",\u4EF7\u683C\uFF1A" + price;
    }
    return res;
}
var food0 = eat();
var food1 = eat("西瓜");
var food2 = eat("苹果", 12);
console.log(food0);
console.log(food1);
console.log(food2);
// 可变参数列表
function play() {
    var games = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        games[_i] = arguments[_i];
    }
    var res = '';
    for (var i = 0; i < games.length; i++) {
        res += games[i];
        if (i < games.length - 1) {
            res += "\u3001";
        }
    }
    return res;
}
var playRes = play('足球', '篮球');
console.log(playRes);
