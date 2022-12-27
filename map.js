

let arr = [1,2,3,4,5] //no change this array 

let arr2 = arr.map((value,index,array) =>{  //map create the new array
    console.log(value,index,array);
    return value +1;
})
console.log(arr2);