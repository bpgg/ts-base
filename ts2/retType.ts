// 函数的返回类型

function errorFunction(): never {
    throw new Error()
    console.log('hello')
}

function forNever(): never {
    while (true) { }
    console.log('hello')
}

// 参数为对象类型

function add({ one, two }: { one: number, two: number }) {
    return one + two
}

const total = add({ one: 1, two: 2 })


function getNumber({ one }: { one: number }) {
    return one;
}

const one = getNumber({ one: 1 })