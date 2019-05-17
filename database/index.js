/* Sequelize */
let Sequelize = require("sequelize");
let sequelize = new Sequelize(
    'gapp', // 数据库名
    'cnki', // 用户名
    'cnki123', // 用户密码
    {
        dialect: 'mysql', // 数据库使用mysql
        host: '192.168.107.254', // 数据库服务器ip
        port: 3306, // mysql默认端口
        define: {
            'underscored': true // 字段以下划线（_）来分割（默认是驼峰命名风格）
        },
        pool: {
          max: 20, // 连接池最大连接数量
          min: 0, // 连接池最小连接数量
          idle: 10000 // 每个线程最长等待时间
        }
    }
);
module.exports = sequelize