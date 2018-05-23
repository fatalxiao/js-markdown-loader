const path = require('path');

module.exports = {
    entry: {
        app: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.md/,
            loader: './src'
        }]
    }
};