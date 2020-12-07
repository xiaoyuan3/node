var mongoose = require("./db");

var UserSchema = mongoose.Schema({
  name: String,

  autor: String,

  isPublished: {
    type: Boolean,
    default: true  //默认参数
  }
})

module.exports = mongoose.model('User', UserSchema, 'user');