function sapa(){
    console.log("halo selamat datang")
}

sapa()

// parameter dalam fungsi

function sapaNama(nama){
   console.log("halo "+nama)
}

sapaNama("Arsya")

// mengembalikan nilai fungsi

function tambah(a,b){
    return a+b
}

let hasil = tambah(2,5)
console.log(`hasil penambahan:`,hasil)

let namaBuah = ["naga","jeruk","pisang"]
console.log(namaBuah)

console.log("elemen ke 0:",namaBuah[0])
console.log("elemen ke 1",namaBuah[1])
console.log("elemen ke 2",namaBuah[2])

// iterasi dengan for
console.log("iterasi dengan for")
for(let i  = 0; i<namaBuah.length;i++){
    console.log("elemen ke"+ i + ':' + namaBuah[i])
}

// iterasi array dengan for each

console.log("iterasi dengan for each")
namaBuah.forEach(function(tes1,tes2){
    console.log("elemen ke"+ tes2 + ":" + tes1)
})

