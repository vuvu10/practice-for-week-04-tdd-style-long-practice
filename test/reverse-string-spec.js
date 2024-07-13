// Your code here
const { expect } = require('chai');
const reverseString  = require("../problems/reverse-string");


describe("reverseString", () => {
    it("should reverse the input string", () => {
        expect(reverseString("fun")).to.equal("nuf");

    });
});
 