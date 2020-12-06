const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
// 配置cookieParser中间件
app.use(cookieParser())




app.get("/", (req, res) => {
  // 设置cookie  {maxAge: 1000*60}多久过期
  res.cookie("username", "zhangsan", {maxAge: 1000*60})

  res.send("你好 express")
})


app.get("/article", (req, res) => {
  // 获取cookie
  let username = req.cookies.username;
  console.log(username);

  res.send("新闻页面--"+username)
})

app.get("/user", (req, res) => {
  res.send("用户")
})


// 第三方中间件


app.listen(3000)