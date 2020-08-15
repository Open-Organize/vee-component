const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: './',
        compress: true,
        host: '0.0.0.0',
        port: '20000',
        hot: true,
        inline: true,
        historyApiFallback: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
            aggregateTimeout: 300
        }
    },
    mode: 'development'
});
