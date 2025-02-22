let judul = document.getElementById('judul')
let paragraf = document.querySelector('.paragraf')

let warnaAwalJudul = "black"
function ubahWarna(){
    // judul.style.color = "blue"
    // paragraf.innerHTML = "warna telah diubah"

    if(judul.style.color === "blue"){
        judul.style.color = warnaAwalJudul
        paragraf.innerHTML = "warna teks kembali ke semula"
    } else {
       judul.style.color = "blue"
       paragraf.innerHTML = "warna telah diubah"
    }
}

function tambahParagraf(){
    let newParagraf = document.createElement("p");
    newParagraf.textContent = "Paragraf baru di tambahkan"
    newParagraf.classList.add("highlight")
    document.body.appendChild(newParagraf)
    
}

function hapusParagraf(){
    let lastParagraf = document.querySelector("p:last-child")
    if(lastParagraf){
        let konfirmasi = confirm("apakah anda yakin ingin hapus paragraf?")
        if(konfirmasi){

            lastParagraf.remove()
            alert("paragraf terakhir telah dihapus")
        } else{
            alert("penghapusan paragraf terakhir dibatalkan")
        } 
    } else{
        alert("tidak ada paragraf yang bisa dihapus")
    }
}