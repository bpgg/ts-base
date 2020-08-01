class Heng {
    public name: string
    public age: number
    public skill: string
    constructor(name: string, age: number, skill: string) {
        this.name = name
        this.age = age
        this.skill = skill
    }

    public find() {
        console.log('找朋友')
    }
}

let hengObj: Heng = new Heng('heng', 18, 'coding')

hengObj.find()

class XiaoHeng extends Heng {
    public weight: number = 60
    public earn(): void {
        console.log('一天赚了好几万')
    }
    // 重写父类的方法
    public find() {
        super.find()
        console.log("找很多朋友")
    }
}
let xiaoheng: XiaoHeng = new XiaoHeng('小恒', 24, '空军')

xiaoheng.find()
xiaoheng.earn()
