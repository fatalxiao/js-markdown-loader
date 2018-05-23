// 'use strict';
//
// import loader from '../src';
// import chai from 'chai';
//
// const expect = chai.expect;
//
// describe('loader', () => {
//
//     it('default', () => {
//         expect(loader('')).to.be.equal('');
//     });
//
// });

const webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

webpack(webpackConfig, (err, stats) => {

    if (err) {
        throw err;
    }

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    console.log('Build complete.');

});