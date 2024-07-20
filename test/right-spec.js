const chai = require('chai');
const expect = chai.expect;
const Right = require('../problems/right');


describe('Right Class', function() {
    let right1;
    let right2;

    beforeEach(function() {
        right1 = new Right(3, 4, 5);
        right2 = new Right(3, 3, 3);
    });

    describe('validate()', function() {
        it('should set isValid to true for a valid right triangle', function() {
            right1.validate();
            expect(right1).to.have.property('isValid', true);
        });

        it('should set isValid to false for an invalid right triangle', function() {
            right2.validate();
            expect(right2).to.have.property('isValid', false);
        });
    });
});