const number = [2,3,5,6,7,8,9];


 const newNumber = [];
for (let i = 0; i < number.length; i++) {
     const x = number[i]
     const result = x * x;
     newNumber.push(result)
}
// console.log(newNumber);

const result = number.map(element => element*element)
// console.log(result);

function sqre(element) {
    return element * element
}
const result2 = number.map(sqre);
// console.log(result2);

const result3 = number.map(function(x) {
    return x*x;
    
})
 
const result4 = number.map(x => x / 2);

console.log(result3);