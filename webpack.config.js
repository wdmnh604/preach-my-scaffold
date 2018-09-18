const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: [
        './src/main.js'
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.vue'], // 引用js和vue文件可以省略后缀名
    },
    module: { // 配置loader
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'}, // 所有.vue结尾的文件，使用vue-loader
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/} // .js文件使用babel-loader，排除node_modules目录
        ]
    },
    plugins: [
        new VueLoaderPlugin()//vue-loader@15.4.2 需要此Plugin
    ],
    devtool: 'source-map' // 用于标记编译后的文件与编译前的文件对应位置，便于调试
}