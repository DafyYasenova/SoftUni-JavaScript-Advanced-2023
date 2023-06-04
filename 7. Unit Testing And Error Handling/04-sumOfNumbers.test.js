const chai = require('chai');
const sum = require('../04-sumOfNumbers')

describe('Sum of numbers function', function(){

    it ('should sum integers correctly', function(){
        // Arrange:
    let arr = [1,2,3];
        // Act:
        let result = sum(arr);
        // Assert:
        chai.expect(result).to.equal(6);
    });

    it ('should sum floating point numbers correctly', function(){
        // Arrange:
    let arr = [1.1, 2.2, 3.3];
        // Act:
        let result = sum(arr);
        // Assert:
        chai.expect(result).to.be.closeTo(6.6, 0.1);
    });

    it ('should cast string to Number(), before sum', function(){
        // Arrange:
    let arr = ['10', '20'];
        // Act:
        let result = sum(arr);
        // Assert:
        chai.expect(result).to.be.equal(30);
    });

    it ('should cast string, before sum', function(){
        // Arrange:
    let arr = ['str', '20'];
        // Act:
        let result = sum(arr);
        // Assert:
        chai.expect(result).to.be.NaN;
    });
});
