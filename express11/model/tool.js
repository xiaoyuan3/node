// 封装
var multer = require('multer');
const path = require("path");
const sd = require('silly-datetime');
const mkdirp = require('mkdirp')
 //上传之前目录一定存在

let tools = {
  multer() {
    var storage = multer.diskStorage({
      // 配置上传的目录
      destination:async (req, file, cb) => {
        // 1、获取当前日期
        let day = sd.format(new Date(), 'YYYYMMDD');

        // path.join 可以拼接路径  static/upload/20201207
        let dir = path.join("static/upload", day);
        // 2、按照日期生成图片存储目录 mkdirp创建文件  mkdirp是一个异步方法 需要等待 dir的文件夹创建成功 才能添加 索要要等待 用 await
        await mkdirp(dir)
        cb(null, dir)
      },
      // 修改上传后的文件名
      filename: function (req, file, cb) {
    
        // 1、获取后缀名
        let extname = path.extname(file.originalname)
        // 2、
        cb(null, file.fieldname + '-' + Date.now() + extname)
      }
    })
    
    var upload = multer({ storage: storage })
    
    return upload;
  }
}

module.exports = tools