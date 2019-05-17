/* 使用express 搭建一个简单的node服务 */
var express = require('express');
var app = express();
var prot = 3210; // 服务启动的端口号
var user = require('../api/userapi.js')

app.get('/',(req,res)=>{
    user.getuserlist(req,res);
})
app.listen(prot)

console.log('服务器启动成功')