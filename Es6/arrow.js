
function multipul(num) {
    return num * 2;
}
console.log(multipul(2))


const multipul2 = function (num) {
    return num * 2;
}
console.log(multipul2(3));

const multipul3 = (num) => num *2;

console.log(multipul3(4));

const multipul4 = () => 4;
console.log(multipul4());

const multipul5 = (x,y) => {
    const sum = x + y;
    const munish = x - y;
    const total = sum * munish;
    return total;
};
console.log(multipul5(7,5));

