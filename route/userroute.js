/* 路由文件 */
var express = require('express');
var router = express.Router();

/* 单个模块 */
var user = require('../api/userapi.js')
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
  next();
});
// define the home page route
router.get('/getlist', function(req, res) {
    user.getuserlist().then(data=>{
      res.writeHead(200,'',{
          'content-type': 'application/json'
      })
      let result = {
          code: 200,
          success: true,
          data: data
      }
      res.write(JSON.stringify(result))
      res.end();
    }) 
});
// define the about route
router.get('/adduser', function(req, res) {
  res.send('About birds');
});

module.exports = router