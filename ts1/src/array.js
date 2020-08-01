"use strict";
var user = {
    name: 'ahhh',
    age: 23,
    doWork: function () {
        console.log("前端开发");
    }
};
console.log(user.name);
user.doWork();
// 数组 Array String Date RegExp
// 声明形式
// let arr1: number[];
// let arr2: Array<string>;
// 赋值
// 字面量赋值
var arr1 = [];
var arr2 = [1, 2, 3];
var arr3 = ['rh', '阿恒'];
// 构造函数赋值
var arr4 = new Array();
var arr5 = new Array(1, 2, 3);
var arr6 = new Array('rh', '阿恒');
// 元组 => 不建议使用
var arrM; // 有序
arrM = ['hello', 10];
// arrM = [ 10, string ] => error
