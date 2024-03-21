const suc = true
const mark = 90


function enrol(callback) {
    console.log('class a jokto hoscha');
    setTimeout(() => {
        if (suc) {
            callback()
        } else {
            console.log('jokto kora jaabe na ');
        }
    }, 2000);
}

function progress(callback) {
    console.log('class a join hoye gecho');
    setTimeout(() => {
        if (mark >= 80) {
            callback()
            console.log('valo mark paicho');
        } else {
            console.log('tumi je mark paicho tate ami certificate dite parbo na ');
        }
    }, 3000);

}

function certificate() {
    setTimeout(() => {
        console.log('ei nau tomar certificate');
    }, 4000);
}

enrol(() => {
    progress(certificate)
})