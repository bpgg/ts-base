"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    return Person;
}());
var aheng = new Person('阿恒', 18);
console.log(aheng.name);
aheng.sayHi();
