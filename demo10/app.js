const http = require('http');
const fs = require('fs');
// 导入common.js
const common = require('./module/common.js');
// path模块
const path = require('path');
const url = require('url');

// common.getFileMime('.png')

http.createServer(function (req, res) {
  // 获取地址 url.parse()解析url  组织get的传值 如all.json?25462812867等 会把解析为all.json
  let pathname = url.parse(req.url).pathname;

  // 判断
  pathname = pathname == '/' ? '/index.html' : pathname;

  // 获取后缀名path.extname() html css js
  let extname = path.extname(pathname);

  // 过滤图标
  if (pathname != '/favicon.ico') {
    fs.readFile('./static' + pathname,(err, data) => {

      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('404这个页面不存在');
      }

      // 利用后缀名调用 common.js函数
      // common.getFileMime(extname) 异步  改为同步  在前面加await await只能在async方法里使用
      let mime =common.getFileMime(extname);
      res.writeHead(200, { 'Content-Type': ''+mime+';charset="utf-8"' });
      res.end(data);
    })
  }

  // 视频对应p11 后面的第二种解决同步的方法




}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');