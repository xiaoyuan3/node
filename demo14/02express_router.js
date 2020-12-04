const http = require("http");
const app = require('./module/route')

// 注册web服务
// route路由中的app = function(req, res){xx}  
http.createServer(app).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

// 配置路由
app.get('/login', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('首页');
})

app.get('/news', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('新闻');
})
app.get('/aaa', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('哈哈');
})