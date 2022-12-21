let friendName= ["sagor","sweet","riju","mostakim","bidhan",];
console.log(friendName)
console.log(friendName[1]);
console.log(friendName[2]);
console.log(friendName.indexOf("riju"));
console.log(friendName.length); 
 friendName.push("puja");
 console.log(friendName);

 friendName.pop();
 console.log(friendName);

 friendName.shift();
 console.log(friendName);

 friendName.unshift("shanto");
 friendName.shift()
 console.log(friendName);

 friendName[1]='shanto';
 console.log(friendName);
 
let ar =[1,2,3,4,5,6];
console.log(typeof ar);
console.log(typeof ar.toString());
console.log(ar.join(' and '));

let ar2 = [1,2,3,4,5,6,7,8,9];
console.log(ar2.length);
delete ar2[0];
console.log(ar2);
console.log(ar2.length);

let ar3 = [1,2,3,4,5,6,7,8,9];
let ar4 = [10,12,13,14,15,16,17,18,19];
let ar5 = [20,21,22,23,24,25,26,27,28,29,30];
 let newar = ar3.concat (ar4,ar5);
 console.log(newar);


 let ar6 = [1,333,4,555,6,777,2,3,7]
 console.log(ar6.sort());
 let compare1 = (a,b) =>{
    return a - b;
 }
 let compare2 = (a,b) =>{
    return b - a;
 }
 let ar7 = [1,333,4,555,6,777,2,3,7]
 console.log(ar7.sort(compare1));
 console.log(ar7.sort(compare2));


 let ar8 = [1,333,4,555,6,777,2,3,7]
 console.log(ar8.reverse());
 
let ar9 = [1,2,3,4,5,6,7,8,9];
let deletevalue = ar9.splice(1,4,20,10 ,40,50);
console.log(deletevalue);
console.log(ar9);

let ar10 = [1,2,3,4,5,6,7,8,9];
console.log(ar10.slice(2 , 5));
console.log(ar10.reverse());







