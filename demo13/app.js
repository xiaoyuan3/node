const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');

http.createServer(function (req, res) {

  // 调用 创建静态外部服务routes.js
  routes.static(req, res, 'static');

  // 路由
  let pathname = url.parse(req.url).pathname.replace("/", "");

  try {
    routes[pathname](req, res);
  } catch (error) {
    routes['error'](req, res);
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
// 视频对应p11 后面的第二种解决同步的方法

// 知识点 get主要用于获取数据
// post主要用于提交数据