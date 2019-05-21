/* 路由文件 */
var express = require('express');
var router = express.Router();

/* 单个模块 */
var user = require('../api/userapi.js')
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('user');
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