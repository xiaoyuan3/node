var mongoose = require("./db");

var NewsSchema = mongoose.Schema({
  name: String,

  autor: String,

  isPublished: {
    type: Boolean,
    default: true  //默认参数
  }
})

module.exports = mongoose.model('News', NewsSchema, 'news');