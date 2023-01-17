
const person = {
    name: "shanto",
    age: 22,
    phone: "01321068458",
    class: 10,
    friend: ["sweet","sagor","panto","safi"],
    info:{
        address:"mohadevpur",
        post:"anietpur",
        thana:"mohadevpur"
    }

}
 const {name,age,info,friend} = person;
 console.log( name,age,info,friend);
 const {address} = person.info;
 console.log(address);

const friend1 = ["sweet","sagor","panto","safi"];
const [a, b]= friend1;
console.log(a,b);
const [...c]= friend1
console.log(c);
