

// node 直接调用dll

var ffi = require('ffi-napi');

var libm = ffi.Library('./add.dll', {
  'Add': [
    'int', // 对应 C函数返回类型
    ['int', 'int'] // C函数参数列表
  ],
});
console.log(libm.Add(6, 5)); 






// var { PythonShell } = require('python-shell');
// // mode 类型： json  text binary(默认)
// var pyshell = new PythonShell('index.py', { mode: 'text' });//mode最好指定“text”而不是“JSON”。

// //js传送给python的数据
// pyshell.send(JSON.stringify({ a: 9, b: 4 }));

// //在实施python代码之后，将数据从python传递给js。
// //传递给python的数据存储在“data”中。
// pyshell.on('message', function (data) {
//   console.log(data);
// });



// //(1-1)将登记的品种数据存储在词典型排列中。
// const fs= require('fs')
// const PYPATH = "index.py"

// var { PythonShell } = require('python-shell');
// var pyshell = new PythonShell(PYPATH, { mode: 'text' }); //mode最好指定“text”而不是“JSON”。

// var obj = {
//   stock_num: 2145,
//   c_name: "ABC_COMPANY",
//   eps: 100
// }

// var JSONFILEPATH='./pyjson.json'

// //(1-2)将词典类型数组转换为JSON格式
// var jsondat = JSON.stringify(obj);

// //(1-3)在已经存在写入上述jsondat的文件的情况下，将该文件删除一次。
// if (fs.existsSync(JSONFILEPATH)) fs.unlinkSync(JSONFILEPATH)
// fs.writeFileSync(JSONFILEPATH, jsondat)


 //(2)接收Python的执行结果

// pyshell.send("");

// //(4)Pythonの実行結果を受け取る
// pyshell.on('message', function (data) {
//   console.log(data)
// })


