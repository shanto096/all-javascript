
class student{
    constructor(name,id){
        this.name =name;
        this.id = id;
        this.school = "sm"
    }
   
}
const student1 = new student('shanto',1);
const student2 = new student('panto',2);
// console.log(student1,student2);



class one{
    name;
    age;
    constructor(name,age){
        this.name = name
        this.age = age
    }
    class = 'one'

    startclass(time){
        console.log(`Time: ${time}`);
    }
    
}
  
const oneclass = new one('shanto',20.)
console.log(oneclass)
oneclass.startclass(10)