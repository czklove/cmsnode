/* 封装的连接数据库的模块 */
let sequelize = require("sequelize")
var sequeapi = require('../index.js')
var moment = require('moment')
let guid = require('../../unit/index.js')
const sequser = sequeapi.define('gapp_user',{
    id: {
        type: sequelize.CHAR(32),
        field: "Id",
        defaultValue: guid.getguid(),
        primaryKey: true,
    },
    username: {
        field: "UserName",
        type: sequelize.STRING,
    },
    password: {
        field: "PassWord",
        type: sequelize.STRING,
    },
    realname: {
        field: "RealName",
        type: sequelize.STRING,
    },
    role: {
        field: "Role",
        type: sequelize.STRING,
    },
    gender: {
        field: "Gender",
        type: sequelize.STRING,
    },
    rightsstr: {
        field: "RightsStr",
        type: sequelize.STRING,
    },
    mobilephone: {
        field: "MobilePhone",
        type: sequelize.STRING,
    },
    teliphone: {
        field: "TeliPhone",
        type: sequelize.STRING,
    },
    email: {
        field: "EMail",
        type: sequelize.STRING,
    },
    usertype: {
        field: "UserType",
        type: sequelize.STRING,
    },
    workunit: {
        field: "WorkUnit",
        type: sequelize.STRING,
    },
    department: {
        field: "Department",
        type: sequelize.STRING,
    },
    idcard: {
        field: "IdCard",
        type: sequelize.STRING,
    },
    token: {
        field: "Token",
        type: sequelize.STRING,
    },
    address: {
        field: "Address",
        type: sequelize.STRING,
    },
    createtime: {
        type: sequelize.DATE,
        field: "CreateTime",
        defaultValue: sequelize.NOW,
        allowNull: false
    },
    flag: {
        field: "Flag",
        type: sequelize.INTEGER,
    },
    trynum: {
        field: "TryNum",
        type: sequelize.INTEGER,
    },
    locktime: {
        field: "LockTime",
        type: sequelize.DATE,
        defaultValue: '0001-01-01 00:00:00'
    },
    unlocktime: {
        field: "UnLockTime",
        type: sequelize.DATE,
        defaultValue: '0001-01-01 00:00:00'
    },
    isactive: {
        field: "IsActive",
        type: sequelize.INTEGER,
    },
    activetime: {
        field: "ActiveTime",
        type: sequelize.DATE,
        defaultValue: '0001-01-01 00:00:00'
    },
    lastvisittime: {
        field: "LastVisitTime",
        type: sequelize.DATE,
        defaultValue: '0001-01-01 00:00:00'
    }
}
,
{
    timestamps: false,
    freezeTableName: true,
    getterMethods: {
        /* createtime的get方法，还是有set拦截方法 */
        createtime: function()  {
            return moment(this.getDataValue('createtime')).format('YYYY-MM-DD HH:mm:ss');
        },
        locktime: function()  {
            return moment(this.getDataValue('locktime')).format('YYYY-MM-DD HH:mm:ss');
        },
        unlocktime: function()  {
            return moment(this.getDataValue('unlocktime')).format('YYYY-MM-DD HH:mm:ss');
        },
        activetime: function()  {
            return moment(this.getDataValue('activetime')).format('YYYY-MM-DD HH:mm:ss');
        },
        lastvisittime: function()  {
            return moment(this.getDataValue('lastvisittime')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
});

/* {raw: true} 返回原数据格式 */
const userlist = function () {
    console.log(1)
    return sequser.findAll({raw: true})
}
const usercreate = function(model) {
    console.log(2)
    return sequser.create(model)
}
module.exports = sequser