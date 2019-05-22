/* 路由文件 */
var express = require('express');
var router = express.Router();

/* 单个模块 */
var userroute = require('./userroute.js')
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next()
});
// define the home page route
router.get('/', function(req, res) {  
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  console.log(req.query)
  res.send('About birds'+req.query.id);
});

router.use('/user', userroute);
module.exports = router;