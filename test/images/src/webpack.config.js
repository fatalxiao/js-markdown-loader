const path = require('path');

module.exports = {
    entry: {
        app: './test/images/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.md/,
            loader: './src'
        }]
    }
};
