// primitive 

let a = 20 //(a এর উপর প্রভাব পড়ে না)
let b = a

b = 30
console.log(a); //20

console.log(b); //30
/*
let name = "Shanto";  // string
let age = 25;         // number
let isOnline = true;  // boolean
let nothing = null;   // null
let notSet;           // undefined
let bigNum = 100n;    // bigint
let id = Symbol();    // symbol
*/




// non-primitive

let person1 = { n: 'shanto' } //এর ভেতরের মান বদল গেছে!
let person2 = person1
person2.n = 'panto'
console.log(person2);
console.log(person1);