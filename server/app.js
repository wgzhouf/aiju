const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const koabody = require('koa-body')
const config = require('./config')
const path = require('path')
const mytool = require('./mytool')

//检查bigshot_image 和 snapshot_image目录是否存在
mytool.checkOutDir(path.join(__dirname, 'bigshot_image'))
mytool.checkOutDir(path.join(__dirname, 'snapshot_image'))

// 使用响应处理中间件
app.use(response)

//支持上传
app.use(koabody({ multipart: true }));

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
