// Your code here

const { expect } = require('chai');
const reverseString  = require("../problems/reverse-string");


describe("reverseString", () => {
    it("should reverse the input string", () => {
        expect(reverseString("fun")).to.equal("nuf");

    });

    context('when given a non-string argument', () => {
        it('should throw a TypeError', () => {
            expect(() => reverseString(123)).to.throw(TypeError);
        });
    });
});
 