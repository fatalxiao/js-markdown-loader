'use strict';

import loader from '../../src';
import chai from 'chai';

const expect = chai.expect,
    webpack = require('webpack'),
    webpackConfig = require('./src/webpack.config.js');

describe('loader', () => {

    it('default', () => {

        // expect(loader('')).to.be.equal('');

        webpack(webpackConfig, (err, stats) => {
            if (err) {
                throw err;
            }
        });

    });

});
