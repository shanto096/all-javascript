 const arry = [1,2,3,4,5,6,7,8]

const newarry = arry.slice(3,5)
// console.log(newarry);
// console.log(arry);

const removed = arry.splice(2,5, 10)
// console.log(removed);
// console.log(arry);
const together = arry.join(" =")
console.log(together);