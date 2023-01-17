function add(num1,num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
console.log(add(10));


function add2(num1,num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
console.log(add2(20));


function add3(num1,num2 = 0) {
    return num1 + num2;
}
console.log(add(30));

function add4(num1,num2 = 20) {
    return num1 + num2;
}
console.log(add(30));