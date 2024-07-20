const chai = require('chai');
const expect = chai.expect;
const Scalene = require('../problems/scalene');


describe('Scalene Class', function() {
    let scalene1;
    let scalene2;

    beforeEach(function() {
        scalene1 = new Scalene(3, 4, 5);
        scalene2 = new Scalene(1, 1, 3);
    });

    describe('validate()', function() {
        it('should set isValid to true for a valid scalene triangle', function() {
            scalene1.validate();
            expect(scalene1).to.have.property('isValid', true);
        });

        it('should set isValid to false for an invalid scalene triangle', function() {
            scalene2.validate();
            expect(scalene2).to.have.property('isValid', false);
        });
    });
});