var sequser = require('../database/model/sequser.js')

/* 所以关羽用户的api */

/* 获取用户列表 */
/* {raw: true} 返回原数据格式 */
const getuserlist = function() {
    console.log(1)
    return sequser.findAll({raw: true})
}
const createuser = function(model) {
    console.log(2)
    return sequser.create(model)
}
module.exports = {
    getuserlist,
    createuser
}