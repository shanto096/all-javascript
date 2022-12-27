let word = "ami kotha bolbo na .amar   kotha bolte ischa kore na"

function wordCount(w) {
    let count = 0;
    for (let i = 0; i < w.length; i++) {
        let element = w[i];
         if (element ==' ' && element[i-1] !==' ') {
            count++;
         }
        
    }
    count++;
    return count;
}
console.log(wordCount(word));