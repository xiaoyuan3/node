/*
1.在 app.js 的头上定义 ejs:,代码如下: 

var ejs = require('ejs'); 

2.注册 html 模板引擎代码如下： 

app.engine('html',ejs.__express);

3.将模板引擎换成 html 代码如下:

app.set('view engine', 'html'); 

4.修改模板文件的后缀为.html。

*/

const express = require("express");
const ejs = require("ejs");
// 实例化
const app = express();

// 配置模板引擎
app.engine("html", ejs.__express)
app.set("view engine", "html")

// 配置静态web目录  下面这句话能够访问 static 文件下的 css  js 等文件
app.use(express.static("static"))

app.get("/", (req, res) => {
  let title = '你好 ejs';
  res.render("index", {
    title: title
  })
})

app.get("/news", (req, res) => {
  let userinfo = {
    username: '张三',
    age: 20
  }

  let article = "<h3>我是一个h3</h3>"

  let list = ["111", "222", "333"]

  let newsList = [
    {
      title: "新闻111"
    }, {
      title: "新闻222"
    }, {
      title: "新闻333"
    }, {
      title: "新闻444"
    }
  ]

  res.render("news", {
    userinfo: userinfo,
    article: article,
    flag: true,  // views/news.html 下的
    score: 60,  // views/news.html 下的
    list: list,
    newsList: newsList
  })
})

//监听端口  端口号建议写成3000以上
app.listen(3000)
