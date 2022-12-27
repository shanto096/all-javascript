let tk =[1,4,3,6,7,8,12]
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sum = sum + arr[i]
    }
    return sum;

}
console.log(sum(tk));