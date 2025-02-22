// if statemen

let num = 20;
if(num > 0){
    console.log("angka positif")
} else if(num < 0){
    console.log("angka negatid")
} else {
    console.log("angka 0")
}

// switch statemen

let day = "Senin";
switch(day){
    case "Senin":
        console.log("Monday")
        break;

    case "Selasa":
        console.log("Tuesday")
        break;

    case "Rabu":
        console.log("Wednesday")
        break;

    case "Kamis":
        console.log("Thurday")
        break;

    case "Jumaat":
        console.log("Friday")
        break;

    case "Sabtu":
        console.log("Saturday")
        break;

    case "Minggu":
        console.log("Sunday")
        break;
       
    default:
        console.log("Hari yang dipilih tidak ada")

}

// operator perbandingan dan logika
// == : equal to nilai sama tetapi tipe data tidak selalu sama (hanya membandingkan nilai)
console.log(5 == "5")
//=== : nilai dan tipe data sama(membandingkan nilai dan tipe data)
console.log(5 === "5")
console.log(5 === 5)
//!= nilai tidak sama dan tipe data tidak selalu berbeda(hanya membandingkan nilai(negasi/kebalikkaanya)) 
console.log(5 != "6")
console.log(5 != 5)
//!== nilai dan tipe data bebrbeda(membandingkan nilai dan tipe data(negasi))
console.log(5 !== 5)
console.log(5 !== 6)
console.log(5 !== "6")
// > : lebih dari
console.log(num > 0)
// < : kurang dari
console.log(num < 2)
// <= : lebih dari sama dengan
console.log(num <=2)

