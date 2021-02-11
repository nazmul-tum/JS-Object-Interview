// Class is the template of so many object (using 'new' keyword);
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Phil', 'Foden', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Joe', 'Denly', 1500);
console.log(friendlyPerson);
