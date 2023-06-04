const isOddOrEven = require('../02-evenOrOdd.js');
const { assert } = require('chai');

describe('isOddOrEven function test', () => {

    it('should return undefined if the parameter is number', () => {
        assert.equal(isOddOrEven(2), undefined);
    });
    it('should return undefined if the parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if the parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    it('should return result is even', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return result is even', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });

});