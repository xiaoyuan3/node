//首先强制生成一个package.json文件 npm init --yes

// 第一步安装  npm install mongodb --save

// 第二步引入mongodb
const { MongoClient } = require('mongodb');

// 定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017';

// 定义要操作的数据库
const dbName = 'itying';

// 实例化MongoClient   传入数据库链接地址    第二个参数 {useUnifiedTopology: true} 去掉cmd中的提示
const client = new MongoClient(url, {useUnifiedTopology: true});

// 链接数据库  有两种方式  下面是第一种

client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("数据库连接成功");
  // 连接成功获取操作的数据库
  let db = client.db(dbName);

  // 1、查找数据collection("user").find()   toArray转为数组
  db.collection("user").find().toArray((err, data) => {
    console.log(data);

    // 操作数据库完毕以后一定要关闭数据库链接
    client.close()
  })

  // 2、增加数据db.collection("user").insertOne
  // db.collection("user").insertOne({ "username": "nodejs操作mongdb", "age": 10 }, (err, result) => {
  //   if (err) {
  //     // 增加失败
  //     console.log(err);
  //     return;
  //   }

  //   console.log("增加成功");
  //   console.log(result);
  //   // 增加的insertedId: 5fcb3edc10018148d0f73fa5
  // })

  // 3、修改数据db.collection("user").updateOne
  // db.collection("user").updateOne({ "name": "xiaoming" }, { $set: { "age": 100 } }, (err, data) => {
  //   if (err) { // 修改失败
  //     console.log(err);
  //     return;
  //   }

  //   console.log("修改成功");
  //   console.log(data);

  //   client.close();
  // })

  
  // 4、删除数据一条数据db.collection("user").deleteOne
  // db.collection("user").deleteOne({ "username": "nodejs操作mongdb" }, (err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   console.log("删除一条数据成功");
  //   client.close();
  // })


  // 一次删除多条数据db.collection("user").deleteMany
  db.collection("user").deleteMany({ "username": "nodejs操作mongdb" }, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("删除多条数据成功");
    client.close();
  })
  // 操作数据库完毕以后一定要关闭数据库链接
  // client.close()
})








// 第二种
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => { //执行函数 })