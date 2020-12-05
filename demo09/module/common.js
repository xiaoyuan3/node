const fs = require('fs');

// extname参数 是后缀名
// exports.getMime = function (extname) {

//   switch (extname) {
//     case '.html':
//       return 'text/html';
//     case '.css':
//       return 'text/css';
//     case '.js':
//       return 'text/jsvascript';
//     default: 
//       return 'text/html';
//   }
// }

exports.getFileMime = function (extname) {
  // 封装成一个异步方法
  return new Promise((resolve, reject) => {
    // 当前拿到的路径为  ../data/mime.json
    // 读写路径是按app.js的路径  ./data/mime.json
    fs.readFile('./data/mime.json', (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      // console.log(data);
      // 当前为string类型的json对象 转换成Object类型  方法：JSON.parse
      // json字符串 转为 json对象  主要是json对象可以获取json字符串里面的属性值
      let mimeObj = JSON.parse(data.toString());
      // 打印类型  extname为后缀类型
      // 知识点：访问对象第一种方法如: obj.name 
      // 知识点：访问对象第一种方法如: obj[name]
      // console.log(MimeObj[extname]);
      // 返回数据
      resolve(mimeObj[extname]);
    })
  })
}