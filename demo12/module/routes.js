// 静态外部服务

const fs = require('fs');
// path模块
const path = require('path');
const url = require('url');

// 
let getFileMime = function (extname) {
  // fs.readFileSync()读取同步的方法
  var data = fs.readFileSync('./data/mime.json');

  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
}
exports.static = function (req, res, staticPath) {
  // 1、获取地址
  let pathname = url.parse(req.url).pathname;

  pathname = pathname == '/' ? '/index.html' : pathname;

  // 获取后缀名path.extname() html css js
  let extname = path.extname(pathname);

  if (pathname != '/favicon.ico') {
    // 2、通过fs读取文件  异步操作 读取不到index.html带后缀的路径 所以转化为同步

    // fs.readFile('./' + staticPath + pathname, (err, data) => {

    //   // 用路由的话 用不到这个 404页面有路由返回
    //   // if (err) {
    //   //   res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
    //   //   res.end('404这个页面不存在');
    //   // }

    //   if (!err) {
    // var mime = getFileMime(extname);
    // res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
    // res.end(data);
    //   }

    //   

    // })

    // 异步转为同步   try{ 执行代码 }catch (err){ 抛出异常代码也可不写 } 尝试操作
    try {
      let data = fs.readFileSync('./' + staticPath + pathname);

      if (data) {
        var mime = getFileMime(extname);
        res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
        res.end(data);
      }
    } catch (err) {

    }

  }
}