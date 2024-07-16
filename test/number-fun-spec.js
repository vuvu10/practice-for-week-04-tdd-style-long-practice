// Your code here


const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun.js');

describe('returnsThree', function() {
  it('should return the number 3', function() {
    expect(returnsThree()).to.equal(3);
  });
});

describe('reciprocal', function() {
  context('with valid arguments', function() {
    it('should return the reciprocal of the given number', function() {
      expect(reciprocal(4)).to.equal(0.25);
      expect(reciprocal(1)).to.equal(1);
      expect(reciprocal(1000000)).to.equal(0.000001);
    });
  });

  context('with invalid arguments', function() {
    it('should throw a RangeError for numbers less than 1', function() {
      expect(() => reciprocal(0)).to.throw(RangeError, 'Input must be between 1 and 1,000,000');
      expect(() => reciprocal(-5)).to.throw(RangeError, 'Input must be between 1 and 1,000,000');
    });

    it('should throw a RangeError for numbers greater than 1,000,000', function() {
      expect(() => reciprocal(1000001)).to.throw(RangeError, 'Input must be between 1 and 1,000,000');
    });

    it('should throw a TypeError for non-number inputs', function() {
      expect(() => reciprocal('4')).to.throw(TypeError, 'Input must be a number');
      expect(() => reciprocal(null)).to.throw(TypeError, 'Input must be a number');
    });
  });
});