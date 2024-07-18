// Your code here

const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person.js');


describe('Person', function() {
    let person;

    beforeEach(function() {
        person = new Person('Mai', 32);
        
    });

    describe('constructor', function() {
        it('should set name and age properties', function() {
            expect(person.name).to.equal('Mai');
            expect(person.age).to.equal(32);
        });
    });

    describe('sayHello()', function() {
        it('should return a greeting with the person\'s name', function() {
            expect(person.sayHello()).to.equal('Hello, my name is Mai');
        });
    });

    describe('visit(otherPerson)', function() {
        it('should return a string stating this person visited the other person', function() {
            const otherPerson = new Person('Erin', 30);
            expect(person.visit(otherPerson)).to.equal('Mai visited Erin');
        });
    });

    describe('switchVisit(otherPerson)', function() {
        it('should return a string stating the other person visited this person', function() {
            const otherPerson = new Person('Erin', 30);
            expect(person.switchVisit(otherPerson)).to.equal('Erin visited Mai');
        });
    });

    describe('update(obj)', function() {
        context('with valid object', function() {
            it('should update the person\'s properties', function() {
                person.update({ name: 'Lulu', age: 57 });
                expect(person.name).to.equal('Lulu');
                expect(person.age).to.equal(57);
            });
        });

        context('with invalid input', function() {
            it('should throw TypeError if input is not an object', function() {
                expect(() => person.update('not an object')).to.throw(TypeError, 'Argument must be an object');
            });

            it('should throw TypeError if object does not have name and age', function() {
                expect(() => person.update({ name: 'Lulu' })).to.throw(TypeError, 'Object must have name and age properties');
            });
        });
    });

    describe('tryUpdate(obj)', function() {
        it('should return true and update properties for valid input', function() {
            expect(person.tryUpdate({ name: 'Lulu', age: 57 })).to.be.true;
            expect(person.name).to.equal('Lulu');
            expect(person.age).to.equal(57);
        });

        it('should return false and not update properties for invalid input', function() {
            expect(person.tryUpdate('not and object')).to.be.false;
            expect(person.name).to.equal('Mai');
            expect(person.age).to.equal(32);
        });
    });

    describe('greetAll(people)', function() {
        it('should return an array of greetings from all people', function() {
            const people = [
                new Person('Mai', 32),
                new Person('Erin', 30),
                new Person('Lulu', 57)
            ];
            const greetings = Person.greetAll(people);
            expect(greetings).to.deep.equal(['Hello, my name is Mai', 'Hello, my name is Erin', 'Hello, my name is Lulu']);
        });
    });
});