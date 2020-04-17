import path from 'path';
import webpack from 'webpack';
import {createFsFromVolume, Volume} from 'memfs';

export default (fixture, loaderOptions = {}, config = {}) => {

    const fullConfig = {
        mode: 'development',
        devtool: config.devtool || false,
        context: path.resolve(__dirname, '../fixtures'),
        entry: path.resolve(__dirname, '../fixtures', fixture),
        output: {
            path: path.resolve(__dirname, '../outputs'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].chunk.js',
            publicPath: '/webpack/public/path/',
            library: '___TEST___'
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
                loader: path.resolve(__dirname, '../../src'),
                query: {
                    fullInfo: true,
                    dialect: 'DERBY'
                }
            }]
        },
        ...config
    };

    const compiler = webpack(fullConfig);

    if (!config.outputFileSystem) {
        const outputFileSystem = createFsFromVolume(new Volume());
        outputFileSystem.join = path.join.bind(path);
        compiler.outputFileSystem = outputFileSystem;
    }

    return compiler;

};
