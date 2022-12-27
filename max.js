let shanto = 100;
let sweet = 500;
let sagor = 300;

if (shanto > sweet) {
    if (shanto > sagor) {
        console.log("shantor tk besi " + shanto);
    }else{
        console.log("sagorer tk besi " + sagor);
    }
    
}else{
    if (sweet > sagor) {
        console.log("sweeter tk besi " + sweet);
    }else{
        console.log("sagorer tk besi " + sagor);
    }
    
}


let maxValue = Math.max(shanto,sweet,sagor)
console.log(maxValue);

let studentMarks = [23,54,6,76,89,90,34,6,97];
 let max = studentMarks[0];
 for (let i = 0; i < studentMarks.length; i++) {
    let element = studentMarks[i];
    if (element > max) {
        max = element;
    }
 }
 console.log(max);

 let studentMarks2 = [23,54,6,76,89,90,34,6,97,100];
 function maxValue2(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element > max) {
            max = element;
        }
     }
     return max;
 }
 console.log(maxValue2(studentMarks2));

 // array big number
let arry = [12, 7, 28, 102, 95, 23, 22, 12];
let arry2 = [12, 279, 28, 1072, 95, 2233, 2202, 12];
function Maxnumber(ar) {
     let max = 0;
     for (let i = 0; i < ar.length; i++) {
       if (ar[i] > max) {
         max = ar[i];
       }
     }
     return max;
   }
 
   console.log(Maxnumber(arry2));
   console.log(Maxnumber(arry));
