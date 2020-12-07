const express = require("express");

var router = express.Router()

router.get("/", (req, res) => {
  res.send("用户列表")
})
router.get("/doLogin", (req, res) => {
  res.send("执行登录")
})


module.exports = router