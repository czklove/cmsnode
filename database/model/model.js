/* 各个表所对应的实体 */

const userInfo = {
    id: {
      type: Sequelize.INTEGER(11), // 字段类型
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 字段是主键
      autoIncrement: true, // 是否自增
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: true,
      unique: false // 字段是否UNIQUE
    },
    title: {
      type: Sequelize.STRING(90),
      allowNull: true,
      validate: { //模型验证 当前字段值发生改变的时候进行验证
        is: ["^[a-z]+$",'i'],     // 只允许字母
        not: ["[a-z]",'i'],       // 不能使用字母
        isEmail: true
      },
      field: 'project_title' // 数据库中字段的实际名称	
    }
}
