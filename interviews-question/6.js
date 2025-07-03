// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
        console.log('success');

    }, 1000);
});

// ✅ 1. Promise.all([])
// 📌 ব্যাখ্যা:
// একাধিক Promise একসাথে চালিয়ে সবগুলো সফল হলে রেজাল্ট দেয়, আর একটি ব্যর্থ হলেও পুরো Promise ব্যর্থ হয়ে যায়।


const p1 = Promise.resolve("🍎 Apple");
const p2 = Promise.resolve("🍌 Banana");
const p3 = Promise.resolve("🍇 Grape");

Promise.all([p1, p2, p3])
    .then(results => console.log("✅ All fruits:", results))
    .catch(error => console.error("❌ Error:", error));
// ❌ যদি একটা fail করে:

const p4 = Promise.resolve("✅ Task 1");
const p5 = Promise.reject("❌ Task 2 failed");
const p6 = Promise.resolve("✅ Task 3");

Promise.all([p4, p5, p6])
    .then(console.log)
    .catch(err => console.error("Caught Error:", err)); // Output: Task 2 failed
// ✅ 2. Promise.race([])
// 📌 ব্যাখ্যা:
// যে Promise সবার আগে settle (resolve/reject) করে, সেটার রেজাল্ট বা error দেয়।

const p7 = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));
const p8 = new Promise(resolve => setTimeout(() => resolve("🐇 Fast"), 1000));

Promise.race([p7, p8])
    .then(result => console.log("🏁 Winner:", result)); // Output: 🐇 Fast
// ✅ 3. Promise.any([])
// 📌 ব্যাখ্যা:
// যে কোন একটা Promise resolve করলেই রেজাল্ট দেয়। সবগুলো reject হলে তবেই error দেয়।

const p9 = Promise.reject("❌ Fail 1");
const p10 = Promise.reject("❌ Fail 2");
const p11 = Promise.resolve("✅ Success 3");

Promise.any([p9, p10, p11])
    .then(result => console.log("First success:", result)) // ✅ Success 3
    .catch(error => console.error("All failed:", error));
// 🔥 এটি অনেক ক্ষেত্রে fallback বা multiple API থেকে যেটা আগে success হবে, সেটা নেয়ার জন্য ব্যবহার হয়।

// ✅ 4. Promise.allSettled([])
// 📌 ব্যাখ্যা:
// সবগুলো Promise শেষ হওয়ার পর (resolve হোক বা reject), সবার status সহ রেজাল্ট দেয়। reject হলেও সবগুলোর status দেখায়।


const p12 = Promise.resolve("👍 Done");
const p13 = Promise.reject("👎 Failed");
const p14 = Promise.resolve("✅ Complete");

Promise.allSettled([p12, p13, p14])
    .then(results => console.log(results));

// [
//   { status: "fulfilled", value: "👍 Done" },
//   { status: "rejected", reason: "👎 Failed" },
//   { status: "fulfilled", value: "✅ Complete" }
// ]