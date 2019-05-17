/* 封装的连接数据库的模块 */
var sequelize = require('../index.js')

const sequser = sequelize.define('gapp_user',{
    Id: {
        type: sequelize.CHAR(36),
        primaryKey: true
    },
    UserName: {
        type: sequelize.STRING
    }
}
,
{

});

const userlist = sequser.findAll().then(function(list){
    console.log(list)
})
module.exports = { userlist }