const chai = require('chai');
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require('../problems/my-map');

describe ('myMap when called', () => {
    let arr;
    const callback = (el) => el * 2;

    beforeEach (() => {
        arr = [1, 2, 3];
    });

    it ('should return a new array created by the callback', () => {
        let newArr = myMap(arr,callback);
        expect(newArr).to.eql([2,4,6]);
    });

    it ('should not mutate the passed-in array argument', () => {
        myMap(arr,callback);
        expect(arr).to.eql([1,2,3]);
    });

    it ('should not call the built-in Array.map method', () => {
        chai.spy.on(arr,'map');
        myMap(arr,callback);
        expect(arr.map).to.not.have.been.called();
    });

    it ('should invoke the passed-in callback once for each element in the passed-in array argument', () => {
        const spy = chai.spy(callback);
        myMap(arr,spy);
        expect(spy).to.have.been.called.exactly(3);
    });
});
