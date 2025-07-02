let nam = ['shanto', 'panto', 'sagor', 'sweet']

let element = document.getElementById('printName')
let element2 = document.getElementById('printName2')
let element3 = document.getElementById('printName3')



document.getElementById('printName').addEventListener('click', () => {
    element.innerText = element.innerText + ' ' + nam[1]
})
document.getElementById('printName2').onclick = () => {
    element2.innerText = element2.innerText + ' ' + nam[0]
}
document.getElementById('printName3').onclick = () => {

    for (const element of nam) {
        element3.innerText += " " + element; // যোগ করে করে দেখাবে
    }
}