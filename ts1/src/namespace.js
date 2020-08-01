"use strict";
var ns1;
(function (ns1) {
    var User = /** @class */ (function () {
        function User() {
            this.name = "阿恒";
        }
        User.prototype.talk = function () {
            console.log("我是" + this.name);
        };
        return User;
    }());
    ns1.User = User;
})(ns1 || (ns1 = {}));
var ns2;
(function (ns2) {
    var User = /** @class */ (function () {
        function User() {
            this.name = "小恒";
        }
        User.prototype.talk = function () {
            console.log("我是" + this.name);
        };
        return User;
    }());
    ns2.User = User;
})(ns2 || (ns2 = {}));
var user1 = new ns1.User();
var user2 = new ns2.User();
user1.talk();
user2.talk();
