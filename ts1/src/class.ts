class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log('hi')
    }
}

let aheng: Person = new Person('阿恒', 18)

console.log(aheng.name)
aheng.sayHi()