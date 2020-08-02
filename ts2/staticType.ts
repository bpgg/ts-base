/*
 * @Author: aheng 
 * @Date: 2020-08-02 07:52:42 
 * @Last Modified by: aheng
 * @Last Modified time: 2020-08-02 08:10:34
 */

const conunt: number = 1

// 自定义静态类型
interface Man {
    username: string
    age: number
}
const xiaoming: Man = {
    username: '小明',
    age: 18
}

// 基础静态类型

// null,undefined,boolean,void,number,string,symbol

// 对象静态类型

// 普通对象类型 数组类型 类类型 函数类型

const ANIMAL_CAT: {
    name: string
} = {
    name: 'cat'
}

const animals: string[] = ['小a', '小b']

namespace animal {
    export class Animal {

    }
}

const cat: animal.Animal = new animal.Animal()

const dog: () => string = () => '哈哈'


