const chai = require('chai');
const expect = chai.expect;

const {returnsThree, reciprocal} = require('../problems/number-fun');

describe ('returnsThree', () => {
    it ('should return the number 3', () => {
        expect(returnsThree()).to.equal(3);
    });
});

describe ('reciprocal', () => {
    context ('rejects arguments outside of 1 and 1,000,000', () => {
        it ('should throw a TypeError if argument is below 1', () => {
            expect(function(){reciprocal(0)}).to.throw(TypeError);
        });

        it ('should throw a TypeError if argument is greater than 1,000,000', () => {
            expect(function(){reciprocal(5000000)}).to.throw(TypeError);
        });
    });

    context ('accpets arguments between 1 and 1,000,000', () => {
        it ('should return the reciprocal of the argument given', () => {
            let valOne = reciprocal(4);

            expect(valOne).to.equal(1/4);
        });
    });

});
