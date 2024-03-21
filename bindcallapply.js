const firstPerson = {
    firstName: "shanto",
    lastName: "kumar",
    salary:1000,
    getFullName: function() {
        const nam = (this.firstName +" " + this.lastName);
        return nam;
    },
    chargeBill: function (amount) {
       this.salary = this.salary - amount;
        return this.salary;
    }
}
// normal
// console.log(firstPerson);
// console.log(firstPerson.getFullName());
// console.log(firstPerson.chargeBill(200));

 
const secondPerson = {
    firstName: "panto",
    lastName: "kumar",
    salary:2000
}
// bind
// const secondPersonName = firstPerson.getFullName.bind(secondPerson)
// const secondPersonBill = firstPerson.chargeBill.bind(secondPerson);

// console.log(secondPersonName());
// console.log(secondPersonBill(500));

// call

firstPerson.chargeBill.call(secondPerson, 50);
console.log(secondPerson.salary);

// apply
firstPerson.chargeBill.apply(secondPerson, [50]);
console.log(secondPerson.salary);

