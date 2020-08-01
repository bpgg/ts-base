function doWork(workType: string): string {
    return `工作类型：${workType}`
}

var workType: string = '前端开发'

var workRes: string = doWork(workType)


// 可选参数, 添加 ?
// 默认参数, = ""

function eat(foodType: string = "葡萄", price?: number): string {

    let res: string = ''

    res = `美好的食物：${foodType}`

    if (!!price) {
        res += `,价格：${price}`
    }

    return res;

}

var food0: string = eat()

var food1: string = eat("西瓜")

var food2: string = eat("苹果", 12)

console.log(food0)

console.log(food1)

console.log(food2)


// 可变参数列表
function play(...games: string[]): string {

    let res = ''
    for (let i = 0; i < games.length; i++) {
        res += games[i]
        if (i < games.length - 1) {
            res += `、`
        }
    }

    return res

}

var playRes: string = play('足球', '篮球')

console.log(playRes)
