// default parameter dan arrow function

// function penjumlahan(val1, val2){
//     return val1 + val2
// }

// console.log(penjumlahan(10,20))

/*

*/

function panggang(bahan, durasi, suhu)
{
    return `panggang ${bahan} selama ${durasi} pada suhu ${suhu}`
}

console.log(panggang("Roti", "10 Menit", "100 C"))

//default parameter
// memeberikan nilai default pada sebuah parameter
function panggang(/*parameter*/bahan = /*default parameter*/"Yang kamu mau masak", durasi = "yang kamu mau", suhu = "Pada suhu yang cocok")
{
    return `panggang ${bahan} selama ${durasi} pada suhu ${suhu}`
}

console.log(panggang())
//^^function decleration (sebelum ada arrow function)


// const penjumlahan = function (val1, val2){
//     return val1 + val2
// }
// console.log([penjumlahan(10,20)])
//^^function expression

//Arrow function

// const penjumlahan = (val1, val2)=>/*arrow function*/{
//     return val1 + val2
// }
// console.log([penjumlahan(10,20)])

let namaLengkap = (namaDepan, namaBelakang)=>{`Nama saya adalah ${namaDepan} ${namaBelakang}`}

console.log("Alfan","Topit");

//rest parameter
function penjumlahan(a,...b)
{
    console.log(a)
    console.log(b)
}

penjumlahan(1,2,3,4,5)

//spread operator
let numbers = [1,2,3,4,5]
/*
let numbers2 = numbers //meng-copy refrencenya bukan nilainya
*/

// let numbers2 = [...numbers]
// console.log(numbers2)

let numbers2 = [6,7,8,9,10]
let combineNumbers = [...numbers, ...numbers2]
console.log(combineNumbers)

//spred operator pada object
let person =
{
    name : "Alfan",
    age : 20
}
person = {address: "Airmadidi", ...person}
console.log(person)

