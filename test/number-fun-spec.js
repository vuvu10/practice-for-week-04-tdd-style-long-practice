// Your code here

const { expect } = require('chai');
const returnsThree = require('../problems/number-fun');
const { describe } = require('mocha');

describe("returnsThree", () => {
    it("should return the number 3", () => {
        expect(returnsThree()).to.equal(3);
    });
});