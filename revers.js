let sms = "ami kotha bolbo na .amar kotha bolte ischa kore na"

function reversString(word) {
     let reverse = "";
     for (let i = 0; i < word.length; i++) {
        let element = word[i];
        reverse = element+ reverse ;
        
     }
     return reverse;
}
console.log(reversString(sms));


let shanto = "ami valo chele";
function reverseName(n) {
  let revName = "";
  for (let ch of n) {
    revName = ch + revName;
  }
  return revName;
}

console.log(reverseName(shanto));