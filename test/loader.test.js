'use strict';

import {compile, getCompiler, getModuleSource, execute, readAsset, getWarnings, getErrors} from './helpers';

describe('loader', () => {

    it('images', async () => {

        const compiler = getCompiler('images.js');
        const stats = await compile(compiler);

        expect(getModuleSource('./images.js', stats)).toMatchSnapshot('module');
        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(getWarnings(stats)).toMatchSnapshot('warnings');
        expect(getErrors(stats)).toMatchSnapshot('errors');

    });

});
