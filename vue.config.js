let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    //基本路径
    publicPath: './',
    //输出文件目录
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //生产环境不需要生产map文件
    productionSourceMap: false,
    chainWebpack: config => {
        //这里是对环境的配置，不同的环境对应不同的BASE_URL
        config.plugin('define').tap(args => {
            args[0]['process.env'].VUE_APP_LOGOUT_URL = JSON.stringify(process.env.VUE_APP_LOGOUT_URL)
            console.log(args[0])
            return args
        })

        //设置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@api', resolve('src/api/api')) //接口地址
            .set('@assets', resolve('src/assets'))
    },
    //  webpack插件配置
    configureWebpack: config => {
        //生产环境插件
    },
    devServer: {
        port: 8888, // 端口
        open: true, // 自动开启浏览器
        compress: false, // 开启压缩
        overlay: {
            warnings: true,
            errors: true
        }
    },
    //定义scss全局变量
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV === 'production' ? true : false,
        sourceMap: false,
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/global.scss";`
            }
        }
    }
}