let student = {
    name:'shamto',
    id:1212,
    roll:2,
    phone:01721,
    email:"shamtokumar096@gmail.com"
}
console.log(student);
let newName = student.name; //find system 1
console.log(newName);
let newName2 =student['id']  //find system 2
console.log(newName2);
let findPhone = 'phone'  //find system 3
let newName3 =student [findPhone];
console.log(newName3);

let chengeName = student.name = 'sweet' //change system 1
console.log(chengeName);
let chengeId =student["id"] =3333; //change system 2
console.log(chengeId);
let proChengePhoine = ['phone']   //change system 3
let changePhone = student[proChengePhoine] = 9666;
console.log(changePhone);
console.log(student);