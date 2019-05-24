# 这是一个使用express+sequelize+mysql搭建的简单nodeapi项目框架

# 1.express模块的使用
    1.1 express 路由
      1.1.1 路由的具体匹配规则  #route.get(\正则\,callback)
      1.1.2 路由的嵌套 route.use('/',childroute)
      1.1.3 写一个符合resfult接口规范的后端接口  # 状态码 content-type 请求方式，
      1.1.4 路由的中间件配置，req、res使用 #路由请求信息，res 返回响应的信息
      1.1.5 路由的参数获取 #req.params.id  req.query.id
      1.1.6 跨域接口的配置 # "Access-Control-Allow-Origin","*" 允许请求的地址
                          # "Access-Control-Allow-Headers","content-type" 允许请求的头部信息
                          # "Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS" 允许请求的方式类型
# 2. node orm框架sequelize的使用
    2.1 sequelize对象的实例 #初始new Sequelize(), 配置信息
    2.2 实体对象，与数据表相对应的实体
        2.2.1 字段类型，字段名称，默认值，数据库对应字段，是否主键等等
            2.2.1.1 字段类型(常用) STRING TEXT INTEGER DATE(UTC格式，记得转化) 
        2.2.2 getterMethods setterMethods ,对应字段的set和get设置 # 如上线需要转化的时间格式
        2.2.3 sequelize 实例对象上一些操作数据库的方法
            2.2.3.1 #sequser.findAll({raw: true}) 获取所以数据，raw:true，只返回原数据格式
                    传入order为排序 limit 分页 offset
            2.2.3.2 #sequser.create 新增数据
            2.2.3.3 #sequser.findByPk() 根据主键获取 
                     findOne({ where: {title: 'aProject'} }) 获取单条
            2.2.3.4 #sequser.findOrCreate 查找某个数据，如果数据不存在则重新创建
            2.2.3.5 #sequser.findAndCountAll 分页查找
            2.2.3.6 #复杂过滤/ OR / NOT查询 查询条件where 
            2.2.3.7 #count 出现次数 #max 最大值 #min 最小值 #sum 求和
            2.2.3.8 #include 实现连表查询  sequser.findAll({ include: [ Course ] })
            2.2.3.9 #sequelize.query 执行原始的sql语句 add update del find
# 3 mysql 的使用
    自己查吧，我又不是dba