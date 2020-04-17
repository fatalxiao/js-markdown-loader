'use strict';

import {compile, getCompiler, getModuleSource, execute, readAsset} from './helpers';

describe('loader', () => {

    it('images', async () => {

        const compiler = getCompiler('images.js');
        const stats = await compile(compiler);

        expect(getModuleSource('./images.js', stats)).toMatchSnapshot('module');
        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');

        // expect(loader('')).to.be.equal('');

        // webpack(webpackConfig, (err, stats) => {
        //
        //     console.log(stats.toJson());
        //
        //     if (err) {
        //         throw err;
        //     }
        //
        // });

    });

});
