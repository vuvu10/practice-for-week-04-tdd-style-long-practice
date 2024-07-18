// Your code here

const chai = require('chai');
const expect = chai.expect;
const Triangle = require('../problems/triangle');
//const { beforeEach } = require('mocha');

describe('Triangle', function() {
    let validTriangle;
    let invalidTriangle;

    beforeEach(function() {
        validTriangle = new Triangle(3, 4, 5);
        invalidTriangle = new Triangle(1, 1, 3);
    });

    describe('constructor', function() {
        it('should set side1, side2, and side3 properties', function() {
            expect(validTriangle.side1).to.equal(3);
            expect(validTriangle.side2).to.equal(4);
            expect(validTriangle.side3).to.equal(5);
        });
    });

    describe('getPerimeter()', function() {
        it('should return the sum of all sides', function() {
            expect(validTriangle.getPerimeter()).to.equal(12);
        });
    });

    describe('hasValidSideLengths()', function() {
        it('should return true for a valid triangle', function() {
            expect(validTriangle.hasValidSideLengths()).to.be.true;
        });

        it('should return false for an invalid triangle', function() {
            expect(invalidTriangle.hasValidSideLengths()).to.be.false;
        });
    });

    describe('validate()', function() {
        it('should set isValid property to true for a valid triangle', function() {
            validTriangle.validate();
            expect(validTriangle.isValid).to.be.true;
        });

        it('should set isValid property to false for an invalid triangle', function() {
            invalidTriangle.validate();
            expect(invalidTriangle.isValid).to.be.false;
        });

        it('should return the value of isValid', function() {
            expect(validTriangle.validate()).to.be.true;
            expect(invalidTriangle.validate()).to.be.false;
        });
    });

    describe('getValidTriangles()', function() {
        it('should return an array of valid triangles', function() {
            const triangle1 = new Triangle(3, 4, 5);
            const triangle2 = new Triangle(1, 1, 3);
            const triangle3 = new Triangle(5, 12, 13);

            const validTriangles = Triangle.getValidTriangles(triangle1, triangle2, triangle3);
            expect(validTriangles).to.have.lengthOf(2);
            expect(validTriangles).to.include(triangle1);
            expect(validTriangles).to.include(triangle3);
            expect(validTriangles).to.not.include(triangle2);
        });
    });

});