// factoreal
let multi = 1;
for (let i = 1; i <= 7; i++) {
     multi = multi * i;
}
console.log(multi);
// addision
let addision = 0;
for (let i = 1; i <= 10; i++) {
     addision = addision + i;
    
}
console.log(addision);

// minus 
let minus = 1;
for (let i = 1; i <= 10; i++) {
     minus = minus - i;
    
}
console.log(minus);

// division
let division = 1;
for (let i = 1; i <= 10; i++) {
     division = division / i;
    
}
console.log(division);


// Fibonacci
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
function Fibonacci(n) {
     let fibo =[0,1]
     for (let i = 2; i <= n; i++) {
          fibo[i] = fibo[i - 1] + fibo[i - 2]; 
        }
         return(fibo);
     
}
console.log(Fibonacci(12));
