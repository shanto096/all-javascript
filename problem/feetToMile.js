
function feet(number) {
    let mile = 0.000189394 *number;
    let fixd = mile.toFixed(6)
    let num = Number(fixd)
    return num;
}
console.log(feet(1000));

// 1.seer to mon
function seerToMon(seer) {
    const mon = 40;
    let total = seer / mon;
    return total;
};
console.log(seerToMon(40));