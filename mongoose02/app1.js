//mongoose 默认参数、mongoose 模块化 mongoose性能疑问


// mongoose 默认参数， 增加数据的时候，如果不传入数据就会使用默认配置的数据

// 1、引入
var mongoose = require('mongoose');

// 2、建立链接
mongoose.connect('mongodb://127.0.0.1:27017/playground', { useNewUrlParser: true }, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('连接成功');
});

// 3、定义数据表(集合的)映射  注意：字段名称必须和数据库保持一致

var UserSchema = mongoose.Schema({
  name: String,

  autor: String,

  isPublished: Boolean
})

// 定义model操作数据库

var UserModel = mongoose.model("User", UserSchema, 'user');


// 数据的查找
// UserModel.find({}, function (err, data) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(data);
// })

// 数据的增加

var user = new UserModel({
  name: "java",
  autor: 'zhangsan',
  sex:"男"  //没有在 mongoose.Schema 定义 sex 属性  不显示
})

user.save((err,data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data);
})