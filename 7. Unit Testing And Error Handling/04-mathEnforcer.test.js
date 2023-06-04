const mathEnforcer = require('../04-mathEnforcer');
const {assert}= require('chai');

describe('mathEnforcer', function(){
    describe('addFive', function(){

        it('should return correct result with a non-number parameter', function(){
            assert(mathEnforcer.addFive('TEST') === undefined)
            assert(mathEnforcer.addFive([]) === undefined)
            assert(mathEnforcer.addFive({}) === undefined)
        });
        it('should return undefined with undefined', function(){
            assert(mathEnforcer.addFive(undefined) === undefined)
        });
        it('should return undefined with null', function(){
            assert(mathEnforcer.addFive(null) === undefined)
        });
        it('should return positive integer number +5', function(){
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('should return positive integer number -5', function(){
            assert(mathEnforcer.addFive(-5) === 0)
        });

    });

    describe('substractTen', function(){

        it('should return correct result with a non-number parameter', function(){
            assert(mathEnforcer.subtractTen('TEST') === undefined)
            assert(mathEnforcer.subtractTen([]) === undefined)
            assert(mathEnforcer.subtractTen({}) === undefined)
        });
        it('should return undefined with undefined', function(){
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });
        it('should return undefined with null', function(){
            assert(mathEnforcer.subtractTen(null) === undefined)
        });
        it('should return positive integer number -10', function(){
            assert(mathEnforcer.subtractTen(5) === -5)
        });
        it('should return positive integer number -5', function(){
            assert(mathEnforcer.subtractTen(-5) === -15)
        });
        it('decimal number -10', function(){
            assert(mathEnforcer.subtractTen(20.2) === 10.2)
        });
    });

    describe('sum', function(){
        it('should return correct result with a non-number parameter', function(){
            assert(mathEnforcer.sum('Test', 2) === undefined)
            assert(mathEnforcer.sum(2, 'tesT') === undefined)
            assert(mathEnforcer.sum('TEST', 2) === undefined)
            assert(mathEnforcer.sum(2, 'TEST') === undefined)
            assert(mathEnforcer.sum([]) === undefined)
            assert(mathEnforcer.sum({}) === undefined)
        });
        it('should return undefined with undefined', function(){
            assert(mathEnforcer.sum(undefined, 2) === undefined)
            assert(mathEnforcer.sum(2,undefined) === undefined)
        });
        it('should return undefined with null', function(){
            assert(mathEnforcer.sum(null,2) === undefined)
            assert(mathEnforcer.sum(2,null) === undefined)
        });
        it('two positive integers numbers', function(){
            assert(mathEnforcer.sum(5,5) === 10)
        });
        it('two negative integers numbers', function(){
            assert(mathEnforcer.sum(-5,-5) ===  -10)
        });
        it('two decimal  numbers', function(){
            assert(mathEnforcer.sum(-10.2,20.2) === 10)
        });
        
    });
})