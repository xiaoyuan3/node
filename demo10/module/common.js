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

// 性能不号
exports.getFileMime = function (extname) {
  // 读取同步的方法
  var data = fs.readFileSync('./data/mime.json');

  let mimeObj=JSON.parse(data.toString()); 
  return mimeObj[extname];
}