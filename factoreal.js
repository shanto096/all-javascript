
// 10: 1x2x3x4x5x6x7x8x9x10
function fact(n) {
    let factoreal = 1;
    for (let i = 1; i <n; i++) {
        factoreal = factoreal * i;
        
    }
    return factoreal;
}
console.log(fact(10));




function fact2(n) {
    let i =1;
   let factoreal = 1;
   while (i<n) {
    factoreal = factoreal * i;
    i++;
   }
   return factoreal;

}
console.log(fact2(10));


let arr=[1,2,3,4,5]
let arr2 = arr.reduce((value1,value2) => { //reduce return this value
    return value1 * value2;
})
console.log(arr2);


// factorial recursive

function fact3(n) {
    if (n == 0) {
        return 1;
    }else{
        return n * fact3(n-1)
    }
}
console.log(fact3(9)); // This is 10 er factoreal 



