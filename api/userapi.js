var user = require('../database/model/sequser.js')
/* 获取用户列表 */
const getuserlist = function(req,res) {
    user.userlist();
    //disconnect(pool);
    res.end('code:200')
}
module.exports = {
    getuserlist
}