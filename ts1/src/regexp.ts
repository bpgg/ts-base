
// 构造函数
let reg1: RegExp = new RegExp("aheng")
console.log(reg1)

let reg2: RegExp = new RegExp("aheng", 'gi')
console.log(reg2)

// 字面量

let reg3: RegExp = /aheng/
let reg4: RegExp = /aheng/ig

// test(string) exec(string)

let reg5: RegExp = /aheng/i
let website = 'aheng.com'

let res: boolean = reg5.test('aheng df aheng')
console.log(res)

console.log(reg1.exec(website))