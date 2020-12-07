/**
 * 1、引入mongoose
 * 
 * 2、建立连接
 * 
 * 3、操作user表(集合)  定义一个courses
 * 
 * 4、定义数据库模型 操作数据库 
 * 注意： 1首字母要大写  2要和数据库(集合)名称对应
 * 这个模型会和模型名称相同的符数的数据库表建立连接
 * 
 */
// 1、引入mongoose
const mongoose = require("mongoose");

// 2、链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/playground');

// 3、操作user表(集合)  定义一个courses  courses里面的对象和数据库表里面的字段需要一一对应

var UserCourses = mongoose.Schema({
  name: String,

  autor: String,

  isPublished: Boolean
})


// 4、定义数据库模型 操作数据库 
//   注意： 1首字母要大写  2要和数据库(集合)名称对应
//   这个模型会和模型名称相同的符数的数据库表建立连接
// var User = mongoose.model('Courses', UserCourses);  可以有两个参数 也可以三个参数

var News = mongoose.model('News', UserCourses, "news");


// 5、查询courses表的数据

// User.find({}, function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// })

// 6、增加数据   save()

// 通过实例化 Model  创建增加的数据
// var news = new News({
//   name: "lisi",
//   autor: "haha",
//   isPublished: true
// })

// news.save(function (err) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('成功');
// })

//7、修改数据   updateOne 第一个参数匹配，第二个参数修改

// News.updateOne({"name":"lisi"}, {"autor":"xiaoxiao"},function (err,data) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// })

// 8、删除数据   deleteOne 

News.deleteOne({ "_id": "5fcdd7a5f2b36f4a8009be8a" }, function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  console.log(data);
})