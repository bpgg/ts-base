namespace ns1 {
    export class User {
        public name: string = "阿恒"
        talk() {
            console.log("我是" + this.name)
        }
    }
}
namespace ns2 {
    export class User {
        public name: string = "小恒"
        talk() {
            console.log("我是" + this.name)
        }
    }
}

let user1: ns1.User = new ns1.User()
let user2: ns2.User = new ns2.User()

user1.talk()
user2.talk()