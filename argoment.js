
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i] 
          sum = sum + num;
        
    }
    return sum;
}
const result = add(10,10,10,20)
console.log(result);