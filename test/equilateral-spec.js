const chai = require('chai');
const expect = chai.expect;
const Equilateral = require('../problems/equilateral');
const { beforeEach } = require('mocha');


describe('Equilateral Class', function() {
    let equilateral1;
    let equilateral2;

    beforeEach(function() {
        equilateral1 = new Equilateral(4, 4, 4);
        equilateral2 = new Equilateral(3, 4, 5)
    });

    describe('validate()', function() {
        it('should set isValid to true for a valid equilateral triangle', function() {
            equilateral1.validate();
            expect(equilateral1).to.have.property('isValid', true);
        });

        it('should set isValid to false for an invalid equilateral triangle', function() {
            equilateral2.validate();
            expect(equilateral2).to.have.property('isValid', false);
        })
    })
})