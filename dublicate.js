
let number =[1,2,4,5,6,7,5,4,3,8,9,3,2,1,];
function dublicate(arr) {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let index = uniqueName.indexOf(element);
        if (index == -1) {
            uniqueName.push(element);
        }
        
    }
    return uniqueName;
    
}
console.log(dublicate(number));


const names = [
      "abul",
      "kasem",
      "abul",
      "korim",
      "rohim",
      "puja",
      "sumaiya",
      "korim",
      "abul",
      "puja",
    ];
    
    function uniqName(arr) {
      let newNuiqName=[]
      for (let n of arr) {
        if (newNuiqName.indexOf(n)===-1) {
          newNuiqName.push(n)
        }
      }
      return newNuiqName
    }
    console.log(uniqName(names));
    