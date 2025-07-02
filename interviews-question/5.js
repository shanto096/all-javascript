// truthy-falsy-conditions.js

console.log("🔍 Falsy Values with if-else check\n");

// ১. false
let value1 = false;
if (value1) {
    console.log("❌ false is Truthy");
} else {
    console.log("✅ false is Falsy");
}

// ২. 0
let value2 = 0;
if (value2) {
    console.log("❌ 0 is Truthy");
} else {
    console.log("✅ 0 is Falsy");
}

// ৩. -0
let value3 = -0;
if (value3) {
    console.log("❌ -0 is Truthy");
} else {
    console.log("✅ -0 is Falsy");
}

// ৪. ""
let value4 = "";
if (value4) {
    console.log('❌ "" (empty string) is Truthy');
} else {
    console.log('✅ "" (empty string) is Falsy');
}

// ৫. null
let value5 = null;
if (value5) {
    console.log("❌ null is Truthy");
} else {
    console.log("✅ null is Falsy");
}

// ৬. undefined
let value6 = undefined;
if (value6) {
    console.log("❌ undefined is Truthy");
} else {
    console.log("✅ undefined is Falsy");
}

// ৭. NaN
let value7 = NaN;
if (value7) {
    console.log("❌ NaN is Truthy");
} else {
    console.log("✅ NaN is Falsy");
}

console.log("\n🔍 Truthy Values with if-else check\n");

// ১. true
let t1 = true;
if (t1) {
    console.log("✅ true is Truthy");
} else {
    console.log("❌ true is Falsy");
}

// ২. 1
let t2 = 1;
if (t2) {
    console.log("✅ 1 is Truthy");
} else {
    console.log("❌ 1 is Falsy");
}

// ৩. -1
let t3 = -1;
if (t3) {
    console.log("✅ -1 is Truthy");
} else {
    console.log("❌ -1 is Falsy");
}

// ৪. "0"
let t4 = "0";
if (t4) {
    console.log('✅ "0" (string) is Truthy');
} else {
    console.log('❌ "0" (string) is Falsy');
}

// ৫. "false"
let t5 = "false";
if (t5) {
    console.log('✅ "false" (string) is Truthy');
} else {
    console.log('❌ "false" (string) is Falsy');
}

// ৬. " "
let t6 = " ";
if (t6) {
    console.log('✅ " " (space string) is Truthy');
} else {
    console.log('❌ " " (space string) is Falsy');
}

// ৭. []
let t7 = [];
if (t7) {
    console.log("✅ [] (empty array) is Truthy");
} else {
    console.log("❌ [] (empty array) is Falsy");
}

// ৮. {}
let t8 = {};
if (t8) {
    console.log("✅ {} (empty object) is Truthy");
} else {
    console.log("❌ {} (empty object) is Falsy");
}

// ৯. function() {}
let t9 = function() {};
if (t9) {
    console.log("✅ function() {} is Truthy");
} else {
    console.log("❌ function() {} is Falsy");
}

console.log("\n🎯 All done!");