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
