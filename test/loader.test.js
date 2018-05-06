'use strict';

import loader from '../src';
import chai from 'chai';

const expect = chai.expect;

describe('loader', () => {

    it('default', () => {
        expect(loader('')).to.be.equal('');
    });

});