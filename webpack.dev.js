const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: path.join(__dirname, 'dist/dev'),
        port: 3000, 
        hot: true, 
        open: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist/dev'),
        filename: 'js/[name].bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
    ],
});
