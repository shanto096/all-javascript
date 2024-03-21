

const theFigures = [2,4,5,6,7,8,9,12,23,45,68,31,90];
const afterMath = (num) => {
  const theArray = [];
  num.forEach((n) => {
    const trippled = n*3;
    theArray.push(trippled);
  });
  return theArray;
}
console.log(afterMath(theFigures));


const arry =[2,3,4]
const result =(x) =>{
    const newarry =[];
    x.forEach((n)=>{
        const sqre = n *2;
        newarry.push(sqre);
    });
    return newarry;
}
console.log(result(arry));

let words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
});