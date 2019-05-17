/* 封装的连接数据库的模块 */
var pool = require('../database/index.js')

/* 引入统一管理的sql模块 */
var queryuser = require('../database/querysql/queryuser.js')

var disconnect = require('../unit/handleDisconnect.js')
/* 获取用户列表 */
const getuserlist = function(req,res) {
    pool.query(queryuser.all,function(err,rews){
        if(err) {
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(err)
        } else {
            rews = (JSON.stringify(rews))
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(rews.toString())
        }
    })
    //disconnect(pool);
}
module.exports = {
    getuserlist
}