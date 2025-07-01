let user = {
    name: "Shanto",
    age: 22,
    "home address": "Rajshahi"
};

console.log(user.name); // Dot → OK
console.log(user["age"]); // Bracket → OK
console.log(user["home address"]); // Only bracket works