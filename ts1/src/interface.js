"use strict";
var husband = {
    sex: '男',
    ability: '看书，工作',
    money: true
};
console.log(husband);
var mySearch;
mySearch = function (source, girl) {
    var flag = source.search(girl);
    return (flag != -1);
};
console.log(mySearch('白、富、美', '美'));
