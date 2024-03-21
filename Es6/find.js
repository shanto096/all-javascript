
const number = [2,3,5,6,7,8,9];


const result2 = number.find(x => x > 5);
console.log(result2);

const phone =[
    { id: 1, name: "nokia1", price:100},
    { id: 2, name:" nokia2", price:200},
    { id: 3, name: "nokia3", price:300}
]
   
const phonePrice = phone.find(x => x.price > 100);
 
console.log(phonePrice);