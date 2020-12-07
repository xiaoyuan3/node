var mongoose = require("./db");

var NewsSchema = mongoose.Schema({
  title: {
    type: String,
    trim:true  //定义mongoose模式修饰符 去掉空格
  },
  autor: String,
  pic: String,
  content: String,
  status: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('News', NewsSchema, 'new');