let nam = ['shanto', 'panto', 'sagor', 'sweet']

let element = document.getElementById('printName')
let element2 = document.getElementById('printName2')



document.getElementById('printName').addEventListener('click', () => {
    element.innerText = element.innerText + ' ' + nam[1]
})
document.getElementById('printName2').onclick = () => {
    element2.innerText = element2.innerText + ' ' + nam[0]
}