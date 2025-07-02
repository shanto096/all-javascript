const a = 0
const b = 0
const c = '0'

console.log(a === b); //true => Both a and b are numbers (0)=== checks both value and type So: 0 === 0 → true
console.log(a == c); //true  => a = 0 (number), c = '0' (string)== allows type coercion (automatic type conversion)'0' gets converted to 0 So: 0 == 0 → true

console.log(a === c); //false => a = 0 (number), c = '0' (string) === requires both value and type to match Since 0 !== '0' in type, result is false

// == 	Loose equality
// ===	Strict equality