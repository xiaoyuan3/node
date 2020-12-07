var UserModel = require('./model/user')
var NewsModel = require('./model/user')

UserModel.find({}, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data);
})

NewsModel.find({}, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data);
})