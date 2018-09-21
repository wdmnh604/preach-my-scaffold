const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/dev-server', // 热替换处理入口文件
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
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, // 所有.vue结尾的文件，使用vue-loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, // .js文件使用babel-loader，排除node_modules目录
            {
                test: /\.less/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),//vue-loader@15.4.2 需要此Plugin
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './test/index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部
        })
    ],
    devtool: 'source-map' // 用于标记编译后的文件与编译前的文件对应位置，便于调试
}