'use strict';

import loader from '../src';
import chai from 'chai';

const expect = chai.expect;

describe('loader', () => {

    it('level 1', () => {
        expect(loader('')).to.be.equal('');
    });

});