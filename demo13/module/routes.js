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


let app = {
  static: (req, res, staticPath) => {
    // 1、获取地址
    let pathname = url.parse(req.url).pathname;

    pathname = pathname == '/' ? '/index.html' : pathname;

    // 获取后缀名path.extname() html css js
    let extname = path.extname(pathname);

    if (pathname != '/favicon.ico') {
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
  },
  login: (req, res) => {
    res.end('login');
  },
  news: (req, res) => {
    res.end('news');
  },
  doLogin: (req, res) => {
    res.end('doLogin');
  },
  error:(req, res) => {
    res.end('error');
  }
}

module.exports=app