const n = NaN

console.log(typeof n); //number 


// 5	----number
// 3.14	----number
// Infinity--number
// NaN	-----number


console.log(Number("hello")); // NaN
console.log(0 / 0); // NaN


typeof NaN === "number" // ✅ true

const v = 10;

if (isNaN(v)) { //false
    console.log('not a number'); //this is not a number  

} else {
    console.log('number ');

}
let a = NaN;
let b = NaN;

console.log(a === b); // false ❌

//NaN === NaN false হয় কারণ NaN নিজেই বলে — "আমি কারও সমান না, এমনকি নিজেরও না!"