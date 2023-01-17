const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = [11,12,13,14,15]
// const all = arr1.concat(arr2).concat(arr3)
const all = [...arr1,...arr2,...arr3]
console.log(all);

const maxTk = [100,200,300,400,500]
console.log(Math.max(...maxTk));