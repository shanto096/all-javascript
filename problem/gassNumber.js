


function gass(number) {
    let ron = Math.round(Math.random()*10)
    console.log(ron);
    if (ron === number) {
       return "right number"
    }else{
        return "enter your right number"
    }
    
}


console.log(gass(3));