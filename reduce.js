
let arr = [1,2,3,4,5]

let arr2 = arr.reduce((value1,value2) => { //reduce return this value
    return value1 + value2;
})
console.log(arr2);

const reduFunc = (value1,value2) =>{
    return value1 + value2;
}
let arr3 = arr.reduce(reduFunc)
console.log(arr3);
