const suc = true
const mark = 90


function enrol() {
    console.log('class a join hoscha');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (suc) {
                resolve()
            } else {
                reject('join kora jaabe na ');
            }
        }, 2000);
    })
    return promise;

}

function progress() {
    console.log('payment  hoicha');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 80) {
                resolve()
            } else {
                reject('tumi je mark paicho tate ami certificate dite parbo na ');
            }
        }, 3000);
    })
    return promise;


}

function startClass() {
    console.log('class cholca');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 80) {
                resolve()
            } else {
                reject('tumi je mark paicho tate ami certificate dite parbo na ');
            }
        }, 3000);
    })
    return promise;


}

function certificate() {
    console.log('valo mark paicho');
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('ei nau tomar certificate');
        }, 4000);
    })
    return promise;
}

enrol()
    .then(progress)
    .then(startClass)
    .then(certificate)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    })