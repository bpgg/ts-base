"use strict";
// 变量的作用域，函数划分
/* var workType: string = "前端开发"

function doWork(): void {
    console.log(workType) // => undefined
    var workType: string = "打球"
}

doWork()

console.log(workType) */
// 全局变量、局部变量
function doWork2() {
    var workType1 = "前端开发";
    {
        var workType2 = "打球";
        console.log(workType2);
    }
    console.log(workType1);
    console.log(workType2); // 依然正确输出，因为转换成的ES5将 let -> var
}
doWork2();
