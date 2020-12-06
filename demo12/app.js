const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');

http.createServer(function (req, res) {

  // 调用 创建静态外部服务routes.js
  routes.static(req, res, 'static');

  // 路由
  let pathname = url.parse(req.url).pathname;

  // 查看请求类型
  console.log(req.method);

  if (pathname == '/login') {
    let msg = "数据库里面获取的数据";
    let list = [
      {
        title: '新闻111'
      },
      {
        title: '新闻222'
      },
      {
        title: '新闻333'
      },
      {
        title: '新闻444'
      }
    ]
    ejs.renderFile('./views/login.ejs', {
      msg,
      list
    }, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end(data);
    })
  } else if (pathname == '/news') {  //http://127.0.0.1:3000/news?page=2&id=1
    // url.parse(req.url, true) true是否为对象 不带true是字符串
    var query = url.parse(req.url,true).query;
    console.log(query.page);

    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end("get传值成功");
  } else if (pathname == '/admin') {
    // post演示
    ejs.renderFile("./views/form.ejs", {}, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end(data)
    })

  } else if (pathname == '/doAdmin') {
    // 获取post传值
    // let postData = '';

    // // 拿到post传值的数据   应该是  监听data ->  data当参数传递给chunk ->  和 postData 进行拼接
    // req.on('data', (chunk) => {
    //   postData += chunk;
    // })
    // req.on('end', () => {
    //   console.log(postData);
    //   res.end(postData);
    // })

    res.end('post ok')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end("页面不存在");
  }


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
// 视频对应p11 后面的第二种解决同步的方法

// 知识点 get主要用于获取数据
// post主要用于提交数据