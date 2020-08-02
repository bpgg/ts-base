const fs = require('fs');

var PATH = './ts1/src'

// 遍历目录-> 文件信息

function run(path: string, callabck) {
    let files = fs.readdirSync(path)

    files.forEach(file => {
        if (fs.statSync(path + '/' + file).isFile()) {
            callabck(path, file)
        }
    })
}


function rename(oldPath: string, newPath: string) {
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            throw err;
        }
    });
}

run(PATH, function (path: string, fileName: string) {
    var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/' + fileName.replace('demo-', ''); // 新路径
    // console.log(newPath);
    rename(oldPath, newPath);
})