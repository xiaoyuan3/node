const http = require("http");
const app = require('./module/route');
const ejs = require("ejs");
const querystring = require('querystring')
const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';

const dbName = 'itying'

// client 只创建一次  这种方法不能刷新查看
// const client = new MongoClient(url, { useUnifiedTopology: true });

//注册web服务
http.createServer(app).listen(3000);

//配置路由
app.get('/', function (req, res) {
    // 用MongoClient.connect 进行链接    函数接收两个参数 err 和 client  每次请求都会创建client
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log(err);
            return;
        }

        let db = client.db(dbName);

        // 查询数据  是异步方法
        db.collection("user").find({}).toArray((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(data);
            client.close();

            // res.send("首页")
            ejs.renderFile("./views/index.ejs", {
                list: data
            }, (err, data) => {
                res.send(data)
            })
        })
    })

})

app.get('/register',  (req, res) => {
    ejs.renderFile("./views/register.ejs", {}, (err, data) => {
        res.send(data);
    })
})

app.post('/doRegister', (req, res) => {
    // name=zhangsan&age=15
    // {
    //     "name": "zhangsan",
    //     "age": 15
    // }


    // querystring.parse  将字符串转成对象  说白了其实就是把url上带的参数串转成数组对象
    let body = querystring.parse(req.body);
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log(err);
            return;
        }

        let db = client.db(dbName);

        db.collection("user").insertOne(body, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('增加数据成功');
            res.send("增加数据成功")
        })
    })
})

