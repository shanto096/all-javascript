const arry = [1,2,3,-1,-3,-4,4,5,6,7,8];

for (let i = 0; i < arry.length; i++) {
    
    // if (arry[i] > 5) {
    //    break;
    // };
    // console.log(arry[i]);


    if (arry[i]<0) {
        continue;
    }
    console.log(arry[i]);

}