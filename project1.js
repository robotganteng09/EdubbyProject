// program kalkulator volume bangun ruang

// fungsi untuk menghitung volume kubus
function kubus(sisi){
    return sisi**3
}

// fungsi untuk menghitung volume balok

function balok(panjang,lebar,tinggi){
    return panjang*lebar*tinggi
}

// fungsi untuk menghitung volume tabung

function tabung(jari,tinggi1){
    const pi = 3.14;
    return pi*jari**2*tinggi1
}

function kalkulatorBangunRuang(){
    console.log("pilih bangun ruang yang akan di hitung")
    console.log("1.volume kubus")
    console.log("2.volume balok")
    console.log("3.volume tabung")
    console.log("keluar")

    let pilihan = parseInt(prompt("pilih jenis bangun ruang(1,2,3,4)"))

    switch(pilihan){
        case 1:
            const sisi = parseFloat(prompt("masukkan sisi panjang kubus (cm)"))
            if(sisi > 0){
                console.log(`volume kubus : ${kubus(sisi)}`)
            } else{
                console.log("harus berupa angka positif")
            }
            break;

        case 2:
            const panjang  =parseFloat(prompt("masukkan sisi panjang balok (cm)"))
            const lebar  =parseFloat(prompt("masukkan sisi lebar balok (cm)"))
            const tinggi  =parseFloat(prompt("masukkan sisi tinggi balok (cm)"))

            if(panjang > 0 && lebar >0 && tinggi > 0){
                console.log(`volume kubus : ${balok(panjang,lebar,tinggi)}` )
            } else {
                console.log("semua input harus angka positif")
            }
            case 3:
                const jari = parseFloat(prompt("masukkan sisi panjang jari (cm)"))
                const tinggi1 = parseFloat(prompt("masukkan sisi panjang jari (cm)"))
                
                if(jari > 0 && tinggi1 >0){
                    console.log(`volume kubus : ${tabung(jari,tinggi1)}`)
                } else {
                    console.log("semua in")
                }
    }        
    
}

kalkulatorBangunRuang()