var express = require("express")
var router = express.Router()
var config = require("./config.js")
var url = require("url")
var homehot = require("./data/home/hotdata")
var searchData = require("./data/search/index")

router.get("/homehot1",function(req,res){
  //url.parse()第二个参数为true，query属性会生成一个对象，如果为false,则返回url对象上的query属性会是一个未解析，未解码的字符串，默认为false
  let cityName = url.parse(req.url,true).query.city
  res.send(homehot.hot1)
})
router.get("/homehot2",function(req,res){
  res.send(homehot.hot2)
})

router.get("/search",function(req,res){
  // 参数：city searchcontent
  res.send(searchData)
})

module.exports = router