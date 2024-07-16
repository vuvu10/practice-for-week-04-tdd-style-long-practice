// Your code here

const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person.js');


describe('Person', function() {
    let person1, person2;

    beforeEach(function() {
        person1 = new Person('Mai', 32);
        person2 = new Person('Erin', 28);
    });

    describe('constructor', function() {
        it('should set name and age properties', function() {
            expect(person1.name).to.equal('Mai');
            expect(person1.age).to.equal(32);
        });
    });

    describe('sayHello()', function() {
        it('should return a greeting with the person\'s name', function() {
            expect(person1.sayHello()).to.equal('Hello, my name is Mai');
        });
    });

    describe('visit(otherPerson)', function() {
        it('should return a string stating this person visited the other person', function() {
            expect(person1.visit(person2)).to.equal('Mai visited Erin');
        });
    });

    describe('switchVisit(otherPerson)', function() {
        it('should return a string stating the other person visited this person', function() {
            expect(person1.switchVisit(person2)).to.equal('Erin visited Mai');
        });
    });

    describe('update(obj)', function() {
        context('with valid input', function() {
            it('should update the person\'s properties', function() {
                person1.update({ name: 'Lulu', age: 57 });
                expect(person1.name).to.equal('Lulu');
                expect(person1.age).to.equal(57);
            });
        });

        context('with invalid input', function() {
            it('should throw TypeError if input is not an object', function() {
                expect(() => person1.update('not an object')).to.throw(TypeError, 'Argument must be an object');
            });

            it('should throw TypeError if object does not have name and age', function() {
                expect(() => person1.update({ name: 'Bob' })).to.throw(TypeError, 'Object must have name and age properties');
            });
        });
    });

    describe('tryUpdate(obj)', function() {
        it('should return true and update properties for valid input', function() {
            expect(person1.tryUpdate({ name: 'Lulu', age: 57 })).to.be.true;
            expect(person1.name).to.equal('Lulu');
            expect(person1.age).to.equal(57);
        });

        it('should return false and not update properties for invalid input', function() {
            expect(person1.tryUpdate('not and object')).to.be.false;
            expect(person1.name).to.equal('Mai');
            expect(person1.age).to.equal(32);
        });
    });

    describe('static greetAll(persons)', function() {
        it('should return an array of greetings from all persons', function() {
            const persons = [person1, person2];
            const greetings = Person.greetAll(persons);
            expect(greetings).to.deep.equal(['Hello, my name is Mai', 'Hello my name is Erin']);
        });
    });
});