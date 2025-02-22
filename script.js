console.log('hello this is my first js')

let nama = "Arsya"
let umur = 15
let isStudent = true
console.log(nama,umur,isStudent)

let angka1 = 3
let angka2 = 1
let tambah = angka1+angka2
let kurang = angka1-angka2
let kali = angka1*angka2
let bagi = angka1/angka2
let modulus = angka1%angka2

const outputDiv = document.getElementById('output1')

document.write(nama)
outputDiv.innerHTML = `
<p>Hallo ini adalah pesan dari javascript</p>
<ul>
<li>nama : ${nama}</li>
<li>umur : ${umur}</li>
<li>isStudent : ${isStudent}</li>

<li>hasil tambah ${angka1} + ${angka2} = ${tambah}<li>
<li>hasil kurang ${angka1} - ${angka2} = ${kurang}</li>
<li>hasil kali ${angka1} x ${angka2} = ${kali}</li>
<li>hasil bagi ${angka1} : ${angka2} = ${bagi}</li>
<li>hasil modulus ${angka1} % ${angka2} = ${modulus}</li>
</ul>`

const konversiGram = (berat) => berat*1000

let berat = 30
let result = konversiGram(berat)

console.log(`hasil dari konversigram dari ${berat} adalah ${result}`)

