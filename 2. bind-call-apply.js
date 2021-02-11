const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Tom', 
    lastName: 'Brady',
    salary: 25000,
    
}
const friendlyPerson = {
    firstName: 'Donuld', 
    lastName: 'Duck',
    salary: 20000,

}

// Bind
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(5000);
console.log(heroPerson.salary); // this will work
console.log(heroPerson.salary1); // this not (salary1 is not defined)

// Call
normalPerson.chargeBill.call(heroPerson, 900); // call directly using comma for Arguments
console.log(heroPerson.salary);


// Apply
normalPerson.chargeBill.apply(friendlyPerson, [3000]) // Apply directly using Array for Arguments
console.log(friendlyPerson.salary);