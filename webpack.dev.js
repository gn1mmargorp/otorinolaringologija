const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000, 
        hot: true, 
        open: true,
       
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
    ],
});
