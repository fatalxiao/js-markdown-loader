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

webpack(webpackConfig, err => {

    if (err) {
        throw err;
    }

    console.log('Build complete.');

});