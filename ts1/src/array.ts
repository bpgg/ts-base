let user = {
    name: 'ahhh',
    age: 23,
    doWork: function () {
        console.log("前端开发")
    }
}

console.log(user.name)
user.doWork()


// 数组 Array String Date RegExp

// 声明形式
// let arr1: number[];
// let arr2: Array<string>;

// 赋值

// 字面量赋值


let arr1: number[] = []
let arr2: number[] = [1, 2, 3]
let arr3: Array<string> = ['rh', '阿恒']

// 构造函数赋值


let arr4: number[] = new Array()
let arr5: number[] = new Array(1, 2, 3)
let arr6: Array<string> = new Array('rh', '阿恒')

// 元组 => 不建议使用

let arrM: [string, number] // 有序

arrM = ['hello', 10]

// arrM = [ 10, string ] => error



