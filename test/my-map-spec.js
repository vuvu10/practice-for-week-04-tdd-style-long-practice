// Your code here
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map');


describe('myMap', function() {
    let inputArray;

    beforeEach(function() {
        inputArray = [1, 2, 3];
    });

    it('should return a new array with the results of calling the callback on every element', function() {
        const callback = (el) => el * 2;
        const result = myMap(inputArray, callback);
        expect(result).to.deep.equal([2, 4, 6]);
    });

    it('should not mutate the original array', function() {
        const originalArray = [...inputArray];
        const callback = (el) => el * 2;
        myMap(inputArray, callback);
        expect(inputArray).to.deep.equal(originalArray);
    });

    it('should not call the built-in Array.map', function() {
        const mapSpy = chai.spy.on(Array.prototype, 'map');
        const callback = (el) => el * 2;
        myMap(inputArray, callback);
        expect(mapSpy).to.not.have.been.called();
    });

    it('should call the callback once for each element in the array', function() {
        const callback = chai.spy((el) => el * 2);
        myMap(inputArray, callback);
        expect(callback).to.have.been.called.exactly(inputArray.length);
    });

    it('should pass the correct arguments to the callback', function() {
        const callback = chai.spy((el, index, array) => el * 2);
        myMap(inputArray, callback);
        expect(callback).to.have.been.called.with(1, 0, inputArray);
        expect(callback).to.have.been.called.with(2, 1, inputArray);
        expect(callback).to.have.been.called.with(3, 2, inputArray);
    })

})