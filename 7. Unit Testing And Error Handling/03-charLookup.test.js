const lookupChar = require('../03-charLookup');
const {assert} = require('chai');

describe('lookupChar function', () =>{

    it('return char at index', ()=>{
        assert(lookupChar('Test',2) === "s");
    });
    it('return char at index', ()=>{
        assert(lookupChar('Test', 0) === "T");
    });
    it('return incorrect index  if index over the string length', ()=>{
        assert(lookupChar('Test', 10) === "Incorrect index");
    });
    it('negative index', ()=>{
        assert(lookupChar('Test', -10) === "Incorrect index");
    });
    it('return indefined if first parameter is not a string', ()=>{
        assert(lookupChar(10, 10) === undefined);
    });
    it('return indefined if first parameter is a string, but second index is decimal', ()=>{
        assert(lookupChar('test', 10.5) === undefined);
    });
    it('return indefined if first and second parameter is a string', ()=>{
        assert(lookupChar('test', 'yes') === undefined);
    });
    it('return indefined if second parameter is a string', ()=>{
        assert(lookupChar(10, 'test') === undefined);
    });
    it('return incorrect index if was empry string', ()=>{
        assert(lookupChar('', 10) === "Incorrect index");
    });

});