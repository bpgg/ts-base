"use strict";
// 构造函数
var reg1 = new RegExp("aheng");
console.log(reg1);
var reg2 = new RegExp("aheng", 'gi');
console.log(reg2);
// 字面量
var reg3 = /aheng/;
var reg4 = /aheng/ig;
// test(string) exec(string)
var reg5 = /aheng/i;
var website = 'aheng.com';
var res = reg5.test('aheng df aheng');
console.log(res);
console.log(reg1.exec(website));
