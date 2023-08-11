const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe('reverseString', () => {
    it ('should return the reverse of the entered string', () => {
        let newString1 = reverseString("fun");
        expect(newString1).to.equal('nuf');
    });

    it ('should throw a TypeError when argument passed to function not a string', () => {
        //expect function to throw an error when passed a particular argument.
        expect(function(){reverseString(5)}).to.throw(TypeError);
    });
});
