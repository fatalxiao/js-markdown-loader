'use strict';

import log from 'friendly-errors-webpack-plugin/src/output';
// import loader from '../../src';
import chai from 'chai';

const // expect = chai.expect,
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

describe('loader', () => {

    it('default', () => {

        // expect(loader('')).to.be.equal('');

        log.title('info', 'WAIT', `Building...`);

        webpack(webpackConfig, err => {

            if (err) {
                throw err;
            }

            log.title('success', 'DONE', 'Build complete.');

        });

    });

});
