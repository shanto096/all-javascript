
class father{
    constructor (faname){
       this.fatherName = faname;
    }
}

class child extends father {
    constructor (faname,name, age){
        super(faname);
        this.name = name;
        this.age = age;
    }
    getfull(){
        return this.name + " => " + this.fatherName
    }
}
 const result = new child("Ronjit chondro mondol",'shanto',18)
console.log(result.getfull());
console.log(result);