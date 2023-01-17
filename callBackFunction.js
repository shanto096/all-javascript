

function firstFunction(name,age,callBack,findwork) {
    console.log('name :' + name );
    console.log("age :" + age);
    work()
    callBack()
    findwork()
}

function work() {
    console.log('web developer');
}


function workHard() {
    console.log("onek valo kaj korte hobe");
}


function laze() {
    console.log('kaj kora jabe na');
}


function find() {
    console.log('ekhon o kaj kori na');
}


function find2() {
    console.log('ami kaj e kori na ');
}


firstFunction( "shanto", "12",workHard,find )
firstFunction( "panto", "22",laze,find2 )
