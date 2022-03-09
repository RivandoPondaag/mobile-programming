let warna = ["Merah","Kuning","Hijau"];
//sebelum ES6
// let warna1 = warna[0]
// let warna2 = warna[1]
// let warna3 = warna[2]

//setelah ES6
let [warna1, ,warna3] = warna;

console.log(warna)