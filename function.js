// 1.seer to mon
function seerToMon(seer) {
    const mon = 40;
    let total = seer / mon;
    return total;
};
console.log(seerToMon(40));

// 2.total Sales
function totalSales(shirt,pant,shoe) {

    const fixedshirt = 100;
    const fixedpant = 200;
    const fixedshoe = 500;

    let  multipleForShirt = fixedshirt * shirt;
    let  multipleForPant = fixedpant * pant;
    let  multipleForshoe = fixedshoe * shoe;

    let total = multipleForShirt + multipleForPant + multipleForshoe;

    return total;
};

console.log(totalSales(1,1,1));

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

console.log(deliveryCost(200));

// 4. best Friend
const namese = [
    "riju",
    "sweet",
    "kasem",
    "sagor",
    "rohim",
    "sweet",
    "korim",
    "sagor",
    "puja",
  ];
  function perfactFriend(array) {
    var friendWord = "";
  
    array.forEach(function(word) {
      if(word.length > friendWord.length) {
        friendWord = word;
      }
    });
  
    return friendWord;
  }
  console.log(perfactFriend(namese));



// 5.duplicate name
const names = [
  "sweet",
  "kasem",
  "sagor",
  "panto",
  "rohim",
  "sweet",
  "korim",
  "sagor",
  "puja",
];

function duplicate(arr) {
    return arr.reduce(function(i, n, x) {
      if (arr.indexOf(n) !== x && i.indexOf(n) === -1) {
        i.push(n);
      }
      return i;
    }, []);
  }
  
console.log(duplicate(names));

// 6.qb calculated
function qb(table,chair,sofa) {

        const makeTable = 10;
        const makeChair = 5;
        const makeSofa = 20;

        let  sqrTable= table / makeTable;
        let  sqrChair= chair / makeChair;
        let  sqrSofa= sofa / makeSofa;

        let totalMake= sqrTable + sqrChair + sqrSofa;

        return totalMake;
    };
    console.log(qb(100,50,200));
    




