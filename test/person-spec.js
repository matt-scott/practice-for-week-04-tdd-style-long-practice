const chai = require('chai');
const expect = chai.expect;

const Person = require('../problems/person');

describe ('The Person class', () => {
    let jake;
    let finn;

    beforeEach (() => {
        jake = new Person('Jake', 33);
        finn = new Person('Finn',16);
    });

/*
constructor - will intake a name and age and set them as properties on the instance.
Make sure you test that these properties exist on an instance, as well as ensuring
they are set properly.
*/
    context ('constructor', () => {
        it ('should create a name and age property on an instance', () => {
            expect(jake.name).to.exist;
            expect(jake.age).to.exist;
        });

        it ('should set the name and age property properly on the instance', () => {
            expect(jake.name).to.equal('Jake');
            expect(jake.age).to.equal(33);
        });
    });


    context ('instance method', () => {
        /*
        sayHello() instance method - will return a string of the Person instance's name
        and a greeting message
        */

        it ("sayHello() should return a string of the Person instance's name and a greeting message", () => {
            expect(jake.sayHello()).to.equal('Jake says hello!');
        });

        /*
        visit(otherPerson) instance method - will return a string stating that this
        instance visited the passed-in person instance (i.e. person1.visit(person2)
        returns "Mai visited Erin").
        */

        it ('visit(otherPerson) should return a string stating that this instance visited the passed-in person instance', () => {
            let exchange = jake.visit(finn);
            expect(exchange).to.equal("Jake visited Finn");
        });

        /*
        switchVisit(otherPerson) instance method - will invoke the visit function of the
        parameter (otherPerson), passing in the current instance as the argument.
        */
        it ('switchVisit(otherPerson) should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument', () => {
            let exchange = jake.switchVisit(finn);
            expect(exchange).to.equal("Finn visited Jake");
        });

        /*
        update(obj) instance method - this method will have two contexts if the incoming
        argument is or is not a valid object.
        A: If the incoming argument is not an object throw a new TypeError with a clear
        message
        */
        context ('update(obj) provided invalid object', () => {
            it ('should throw a specific TypeError', () => {
                expect(function() { jake.update('hi') } ).to.throw(TypeError, 'update method requires an object with name and age keys');
            });
        });

        context ('update(obj) provided valid object', () => {
            /*
            B: If the incoming argument is an object then the instance's properties should be
            updated to match the passed-in object's values as shown below.
            */
            it ("should update the instance's properties to match the passed-in object's values", () => {
                jake.update({ name: "lulu", age: 57 });
                expect(jake.name).to.equal("lulu");
                expect(jake.age).to.equal(57);
            });

             /*
            C: If the incoming object does not have a name and an age property, throw a
            TypeError with an appropriate message

            */
            it ("should throw a specific TypeError if passed-in object's values do not have a name and age property", () => {
                expect(function() { jake.update( { height: 49} ) } ).to.throw(TypeError, 'update method requires an object with name and age keys');
            });
        });

        /*
        tryUpdate(obj) instance method - this method will call the update(obj) method with
        the incoming argument, and it will have two contexts if the invocation of update
        was or was not successful:
        */
               /*
        A: If update is successfully invoked (it does not throw an error) then true is
        returned indicating the update was successful (make sure that the instance was
        updated as well)
        */
        context ('tryUpdate(obj) successful', () => {
            it ('should return true', () => {
                let outcome = jake.tryUpdate({ name: "lulu", age: 57 });
                expect(outcome).to.equal(true);
            });

            it ('should update the instance', () => {
                jake.update({ name: "lulu", age: 57 });
                expect(jake.name).to.equal("lulu");
                expect(jake.age).to.equal(57);
            });
        });

        /*
        B: If update is not successfully invoked it should not throw an error, instead
        it should return false.
        */
        context ('tryUpdate(obj) not successful', () => {
            it ('should return false', () => {
                let outcome = jake.tryUpdate('hi');
                expect(outcome).to.equal(false);
            });
        });
    });

    context ('static method', () => {
    /*
    greetAll(obj) static method - this will intake an array of Person instances.
    The greetAll method will then call the sayHello() method on each Person instance
    and store each returned string in an array, before finally returning an array of
    the stored strings.
    */
        it ('should take an array of Person instances, calling sayHello() for each instance, and return an array of the resulting strings', () => {
            let personArray = [jake,finn];
            let greetAllReturn = Person.greetAll(personArray);
            let expectedReturn = ['Jake says hello!', 'Finn says hello!']
            expect(greetAllReturn).to.eql(expectedReturn);
        });

    });

});
