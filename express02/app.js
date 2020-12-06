/*
1、安装 npm install ejs --save


2、配置 app.set("view engine", "ejs")

3、使用 渲染  (默认加载模板引擎的文件夹是views)
res.render("index", {

})
*/ 

const express = require('express');


// 实例化
const app = express()

// 配置模板引擎(自动配置ejs)   不需要引入ejs
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  // 也可以渲染后台数据
  let title = '你好 ejs'
  res.render("index", {
    title:title
  })

})

app.get("/login", (req, res) => {
  // 也可以渲染后台数据
  let userinfo = {
    username: "zhangsan",
    age:20
  }
  let article = "<h3>我是一个h3</h3>"
  res.render("login", {
    userinfo: userinfo,
    article: article
  })
  
})

app.listen(3000);