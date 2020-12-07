// 链接数据库

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground', { useNewUrlParser: true }, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("数据库连接成功");
})

module.exports = mongoose;