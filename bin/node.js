/* 写一个简单node服务 */

/* 严格模式 */
'use strict'
var http = require('http'),// 引入http模块
    fs = require('fs'),// 引入读取文件模块
    path = require('path'), // 引入读取路径模块
    url = require('url'); // 引入操作url模块

// 获取根据
var root = path.resolve(process.argv[2] || '.')

console.log(root)
// 创建服务器
var server = http.createServer(function(req,res){
    //获取url的path 入'/index.html'
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
    if(pathname !== '/') {
        pathname = '\\src'+ pathname;
    } else {
        pathname = '\\src\\index.html';
    }
    /* 得到文件的绝对路径 */
    var filepath = path.join(root + pathname);
    console.log(filepath)
    /* 读取文件 */
    fs.stat(filepath,function(err,stats) {
        if(!err && stats.isFile()) {
            console.log('读取到文件了')
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            res.writeHead(404);
            res.end('404 not found')
        }
    });

}).listen(8281)
