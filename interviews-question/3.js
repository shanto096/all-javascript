// comparison

const step1 = 1 > 2; // false
console.log("Step 1: 1 > 2 →", step1); // false

const step2 = false > 3; // false → 0, so 0 > 3 → false
console.log("Step 2: false > 3 →", step2); // false

console.log("Final Result: 1 > 2 > 3 →", step2); // false

console.log("\n👉 Expression: 3 < 2 < 1");

const step3 = 3 < 2; // false
console.log("Step 1: 3 < 2 →", step3); // false

const step4 = false < 1; // false → 0, so 0 < 1 → true
console.log("Step 2: false < 1 →", step4); // true

console.log("Final Result: 3 < 2 < 1 →", step4); // true



// false is converted to 0
// true is converted to 1