"use strict";
// Number
var age = 18;
var height = 170;
var money = NaN;
console.log(age);
console.log(height);
// String
var rheng = "你在远方";
console.log(rheng);
// boolean 只有 true false
var isRight = true;
console.log(isRight);
// enum 类型 枚举 四季：春夏秋冬
var PERSON;
(function (PERSON) {
    PERSON[PERSON["man"] = 0] = "man";
    PERSON[PERSON["woman"] = 1] = "woman";
})(PERSON || (PERSON = {}));
var SEANSON;
(function (SEANSON) {
    SEANSON["spring"] = "\u6625\u5929";
    SEANSON["summer"] = "\u590F\u5929";
})(SEANSON || (SEANSON = {}));
console.log(PERSON.man);
console.log(SEANSON.spring);
// any
var t = 10;
t = "rheng";
t = true;
console.log(t);
// null
