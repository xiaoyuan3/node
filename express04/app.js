const express = require('express')

const app = express()

// 4、内置中间件 可以匹配static文件夹下面的文件 如static 下的 css/base.css
app.use(express.static("static"))


// 应用级中间件 (用于权限判断)
app.use((req, res, next) => {
  console.log(new Date());
  next();
})

app.get("/", (req, res) => {
  res.send("你好 express")
})

app.get("/article", (req, res) => {
  res.send("新闻页面")
})

app.get("/login", (req, res) => {
  res.send("登录")
})

app.get("/register", (req, res) => {  //get:显示数据
  res.send("注册页面")
})

app.post("/doLogin", (req, res) => {   //post:增加数据
  console.log("执行登录")
  res.send("执行登录")
})

// 3、错误处理中间件 没有配置的路径
app.use((req, res, next) => {
  res.status(404).send("404")
})


// 第三方中间件


app.listen(3000)