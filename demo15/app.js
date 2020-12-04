const http = require("http");
const app = require('./module/route');
const ejs = require("ejs")

// 注册web服务
// route路由中的app = function(req, res){xx}  
http.createServer(app).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

// 配置路由
app.get('/', function (req, res) {
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
app.get('/login', function (req, res) {
  ejs.renderFile("./views/form.ejs", {}, (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end(data);
  })
})

// post调用
app.post('/doLogin', function (req, res) {
  console.log(req.body);

  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end(req.body);
})