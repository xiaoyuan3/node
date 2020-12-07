var NewsModel=require("./model/news")


var news = new NewsModel({
  title: "  我是一个国际新闻222  ", //左右有空格
  author: '张三',
  pic:"http://xxx.com/x.png"
})

news.content = 'content'

news.save((err, data) => {
  if (err) {
    return console.log(err);
  }

  // console.log(data);
  NewsModel.find({}, (err,data) => {
    console.log(data);
  })
})