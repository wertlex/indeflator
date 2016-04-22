/**
 * Created by wert on 20.04.16.
 */

'use strict';

const   expect  = require('chai').expect,
        flatten = require('../src/flatten');


describe("flatten", () => {
    it('should convert keys to arrays with one item for plain objects', () => {
        const input = {
            name:   "John",
            age:    30
        };

        const output = flatten(input);

        expect(output).to.be.deep.equal({
            ['name']:   input.name,
            ['age']:    input.age
        });
    });

    it('should convert keys to arrays with one item for plain objects with dates', () => {
        const input = {
            name:   "John",
            age:    30,
            now:    new Date()
        };

        const output = flatten(input);

        expect(output).to.be.deep.equal({
            ['name']:   input.name,
            ['age']:    input.age,
            ['now']:    input.now
        });
    });
});
