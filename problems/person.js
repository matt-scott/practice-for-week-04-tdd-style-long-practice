class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello () {
    return (`${this.name} says hello!`);
  }

  visit (friend) {
    return (`${this.name} visited ${friend.name}`);
  }

  switchVisit (friend2) {
    let message = friend2.visit(this);
    return message;
  }

  update (newProperties) {
    if (typeof newProperties !== 'object') {
      throw new TypeError('update method requires an object with name and age keys');
    }

    if (!newProperties.name) {
      throw new TypeError('update method requires an object with name and age keys');
    }

    this.name = newProperties.name;
    this.age = newProperties.age;
  }

  tryUpdate (newProperties2) {
    try {
      this.update(newProperties2);
      return true;
    }
    catch (error) {
      return false;
    }
  }

  static greetAll (personArray) {
    let returnArray = [];
    personArray.forEach((el) => {
      returnArray.push(el.sayHello());
    });
    return returnArray;
  }
}

module.exports = Person;

// let jake = new Person('Jake', 33);
// let finn = new Person('Finn',16);
// let arr = [jake,finn];
// let greetAllReturn = Person.greetAll(arr);
// console.log(greetAllReturn);
