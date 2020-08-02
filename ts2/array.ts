/*
 * @Author: aheng 
 * @Date: 2020-08-02 08:25:04 
 * @Last Modified by: aheng
 * @Last Modified time: 2020-08-02 08:30:43
 */

const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c']
const undeArr: undefined[] = [undefined, undefined]

const arr: (number | string)[] = [1, '哈哈']

const navList: { name: string, id: number }[] = [
    { name: '首页', id: 2 }
]

type navItem = { name: string, id: number }
class navItemClass {
    name: string = ''
    age: number = 0
}

const navList2: navItem[] = [
    { name: '首页', id: 2 }
]
