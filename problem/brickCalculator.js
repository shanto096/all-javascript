
function calculet(brick) {
  
    if (brick <= 10) {
       return 1000 * brick;  
    }
    if (brick <= 20) {
        return 1000 * 10 + (brick - 10)*500;
    }
    if (brick <= 30) {
        return 1000 * 10 + 500 * 10 +(brick -20)*200
    }
    
}
console.log(calculet(21));

// 3.delivery Cost
  function deliveryCost(numberOfProduct) {
      if (numberOfProduct <= 100) {
        return numberOfProduct * 100;
      }
       if (numberOfProduct <= 200){
        return 100 * 100 + (numberOfProduct - 100)*80;
      }
      if (numberOfProduct <= 300) {
        return 100 * 100 + 100 * 80 + (numberOfProduct - 200)*50;
      }else{
        return "not find";
      }
  }