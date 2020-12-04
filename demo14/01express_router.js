/*
最终目标是以这样的方式配置路由：
app.get("/", function(req, res) {
  res.send("hello world")
})
*/

let G = {};

let app = function (req, res) {
  if (G['/login']) {
    G['/login'](req, res); //  回调函数 执行function (req, res) {res.send('hello world')}
  }
}

app.get = function (str, cb) {
  
  //注册方法
  G[str] = cb;
  /*
    相当于
    G['/login'] = function (req, res) {
      res.send('hello world')
    }
  */
}

app.post = function () {
  console.log('post方法');
}

// 调用app.get();

// 配置路由
app.get("/login", function(req, res) {
  // res.send("hello world")
  console.log('执行login方法');
});

setTimeout(() => {
  app('req', 'res')
}, 1000);