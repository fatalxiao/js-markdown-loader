const path = require('path');

module.exports = {
    entry: {
        app: './test/images/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
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
