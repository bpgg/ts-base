"use strict";
/*
 * @Author: aheng
 * @Date: 2020-08-02 07:52:42
 * @Last Modified by: aheng
 * @Last Modified time: 2020-08-02 08:07:16
 */
var conunt = 1;
var xiaoming = {
    username: '小明',
    age: 18
};
// 基础静态类型
// null,undefined,boolean,void,number,string,symbol
// 对象静态类型
var ANIMAL_CAT = {
    name: 'cat'
};
var animals = ['小a', '小b'];
var animal;
(function (animal) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    animal.Animal = Animal;
})(animal || (animal = {}));
var cat = new animal.Animal();
var dog = function () { return '哈哈'; };
