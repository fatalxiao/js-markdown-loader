const path = require('path');

console.log('__dirname::', __dirname);

module.exports = {
    entry: {
        app: './test/images/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.md/,
            loader: './src',
            options: {
                fullInfo: true
            }
        }]
    }
};
