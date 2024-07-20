const chai = require('chai');
const expect = chai.expect;
const Isosceles = require('../problems/isosceles');

describe('Isosceles Class', function() {
    let isosceles1;
    let isosceles2;

    beforeEach(function() {
        isosceles1 = new Isosceles(4, 4, 5);
        isosceles2 = new Isosceles(1, 1, 3);
    });

    describe('validate()', function() {
        it('should set isValid to true for a valid isosceles triangle', function() {
            isosceles1.validate();
            expect(isosceles1).to.have.property('isValid', true);
        });

        it('should set isValid to false for an invalid isosceles triangle', function() {
            isosceles2.validate();
            expect(isosceles2).to.have.property('isValid', false);
        })
    })
})