// 12: 0+1+1+2+3+5+8+13+21+34+55+89+144
function fibo(n) {
    let fibonacci = [0,1]
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
        
    }
    return fibonacci;
}
console.log(fibo(12));



function fibo2(n) {
    let i = 2;
    let fibonacci = [0,1];
    while (i<=12) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        i++;
    }
   return fibonacci;
}
console.log(fibo2(12));

// fibonacci recursive
function fibo3(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }else{
        return fibo3(n-2) + fibo3(n-1);
    }
}
console.log(fibo3(12));


function fibo4(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0,1];
    }else{
        let fibo = fibo4(n-1);
        let nextfibo = fibo[n-2] + fibo[n-1];
        fibo.push(nextfibo);
        return fibo;
    }
    
}
console.log(fibo4(12));