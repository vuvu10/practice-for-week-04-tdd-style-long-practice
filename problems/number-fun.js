function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(num) {
  // Your code here
  if(typeof num !== 'number') {
    throw new TypeError('Input must be a number');
  }

  if (num < 1 || num > 1000000) {
    throw new RangeError('Input must be between 1 and 1,000,000');
  }
  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal,
};