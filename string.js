let a = "shanto"
console.log(a.length);


a = "shanto\'"
console.log(a.length);


a = "shanto"
console.log(a.toUpperCase());


a = "shanto"
console.log(a.toLowerCase());


a = "Shanto"
console.log(a.slice(2,4));
console.log(a.slice(2));
console.log(a.slice(-2));
console.log(a.substring(1,3));
console.log(a.replace('Sha','Pa'));
console.log(a.replace(/SHA/i,'pra'));
console.log(a.replace(/Shanto/g,'sweet'));
let text = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text.replaceAll('cats','dogs'));
console.log(text.replaceAll('Cats','Dogs'));



a = "shanto"
let b = "sweet"
console.log(a.concat(' add ', b));


a = "      shanto   ";
console.log(a);
console.log(a.trim());


a ="shanto"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
for (let i = 0; i < a.length; i++) {
    console.log(a[i]); 
}

