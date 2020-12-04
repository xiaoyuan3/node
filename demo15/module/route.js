const url = require("url");

let server = () => {
  let G = {};
  // 把get 和 post 分开 
  // let G1 = {};
  // let G2 = {};

  // 也可以
  G._get = {};
  G._post = {};

  let app = function (req, res) {
    let pathname = url.parse(req.url).pathname;
    // 获取请求类型 toLowerCase() 转化为小写字母
    let method = req.method.toLowerCase();

    if (G['_'+method][pathname]) {
      //G[pathname](req, res); //  回调函数 执行function (req, res) {res.send('hello world')}
      if (method == 'get') {
        // get
        G['_'+method][pathname](req, res);
      } else {
        // post  获取post数据  把它绑定到req.body
        let postData = '';

        // 拿到post传值的数据
        req.on('data', (chunk) => {
          postData += chunk;
        })
        req.on('end', () => {
          console.log(postData);
          req.body = postData;

          G['_'+method][pathname](req, res);// 调用
        })

        
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('网页不存在');
    }
  }

  app.get = function (str, cb) {

    //注册方法
    G._get[str] = cb;

  }

  // 下面是post方法
  app.post = function (str, cb) {
    //注册方法
    G._post[str] = cb;
  }

  return app;
}
module.exports = server(); // 调用的server() 相当于 app