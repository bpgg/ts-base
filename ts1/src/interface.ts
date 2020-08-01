// 接口
interface Husband {
    sex: string
    ability: string
    money?: boolean
}

let husband: Husband = {
    sex: '男',
    ability: '看书，工作',
    money: true
}

console.log(husband)

interface SearchGirl {
    (source: string, subSource: string): boolean
}

let mySearch: SearchGirl

mySearch = function (source: string, girl: string): boolean {
    let flag = source.search(girl)
    return (flag != -1)
}

console.log(mySearch('白、富、美', '美'))