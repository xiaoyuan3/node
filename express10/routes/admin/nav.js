const express = require("express");
var multer = require('multer');
const path = require("path")
 //上传之前目录一定存在

var storage = multer.diskStorage({
  // 配置上传的目录
  destination: function (req, file, cb) {
    cb(null, 'static/upload')
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

var router = express.Router()

router.get("/", (req, res) => {
  res.send("导航列表")
})
router.get("/add", (req, res) => {
  res.render("admin/nav/add")
})
router.get("/edit", (req, res) => {
  res.send("修改导航")
})
router.post("/doAdd", upload.single("pic"), (req, res) => {
  // 获取表单传过来的数据
  
  res.send({
    body: req.body,
    file: req.file
  })
  // res.send("执行导航")
})
router.post("/doEdit", (req, res) => {
  res.send("执行修改")
})

module.exports = router