function randomNumArr(num) {
         let uniqNum = [];
       
         for (let i = 1; i <= num; i++) {
           // console.log(i);
           let ran = Math.random() * 100;
           let roundNum = Math.floor(ran);
           if (uniqNum.indexOf(roundNum) == -1) {
             uniqNum.push(roundNum);
           } else {
             console.log("Match", roundNum);
           }
         }
       
         return uniqNum;
       }
       let n = randomNumArr(10);
       console.log(n);

 let x =-23;
console.log(Math.abs(x));
