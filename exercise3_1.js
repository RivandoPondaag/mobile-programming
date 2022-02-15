/*
Nama Kelompok : 
Marietta Ardelia Gavrila Unenor
Nariva Charline Wagey
Rivando Morten Pondaag
Alfan F. A. Topit
Chrisnov Pala'langan

Soal
1.Module
- Export & Import
- Export As & Import As
- Export Default

2.Asyncronous JS
- Contoh sederhana asyncronous JS menggunakan setTimeout()
- Promise
- Menggunakan Promise menggunakan then()
- Menggunakan Promise menggunakan Async/Await

3.Class in JS
*/


//Jawaban
// 1. MODULE

// Import exercise. 1
import { latihan1 } from './export.js';
console.log(latihan1);

// Import exercise. 2
import { helloWorld, object } from './export.js';
helloWorld();
console.log(object);

// Import As ex. 1
import { latihan2 as latihan3 } from './export.js';
console.log(latihan3);

// Import As ex. 2
import { latihanAs as helo, objek as panggil } from './export.js';
helo();
console.log(panggil);

// Import As ex. 3
import * as semua from './export.js'
console.log(semua);

// Import default
import defaultV from './export.js';
console.log(defaultV);



/*// 2. ASYNCHRONOUS

// Contoh setTimeout()
setTimeout(() => {
    console.log("4");
}, 500);
console.log("1");
console.log("2");
console.log("3");

// Promise - fulfilled
let promiseFulfilled = new Promise((resolve, reject) => {
    if (true) {
        resolve(console.log("resolve"))
    }
    else {
        reject(console.log("reject"));
    }
});

// Promise
let promise = new Promise((resolve, reject) => {
    if (false) {
        resolve(console.log("resolve"))
    }
    else {
        reject(console.log("reject"));
    }
});


// Promise (w/then()) - Fulfilled
let promiseWthenF = new Promise((resolve, reject) => {
    if(true) {
        resolve("resolve");
    }
    else {
        reject("reject");
    }
});
promiseWthenF.then((r) => {
    console.log(r);
});

// Promise (w/then()) - Rejected
let promiseWthenR = new Promise((resolve, reject) => {
    if(false) {
        resolve("resolve");
    }
    else {
        reject("reject");
    }
});
promiseWthenR.then((r) => {
    console.log(r);
});

// Promise (w/Async)
async function asyncFunc() {
    return "Asynchronous Function";
};
console.log(asyncFunc());

// Promise (w/Async & Await)
let con = true;
let asyncAwaitFunc = async (con) => {
    if (con) {
        return "Fulfilled";
    }
    else {
        throw "Rejected";
    }
};
const execute = async (con) => {
    try {
        const msg = await asyncAwaitFunc(con);
        console.log(msg);
        console.log("Fulfilled (after condition)");
    }
    catch (error) {
        console.log(error);
    }
};
execute(true);
execute(false);*/



// 3. CLASS
class Mobil {
    constructor(nama, tahun, nomorKendaraan) {
        this.nama = nama;
        this.tahun = tahun;
        this.nomorKendaraan = nomorKendaraan;
    }

    cekNomorKendaraan() {
        return this.nomorKendaraan;
    }
}

const merek1 = new Mobil("Honda Jazz", 2018, 2033045890);
console.log(merek1);
console.log(merek1.nomorKendaraan);

const merek2 = new Mobil("Toyota Yaris", 2020, 512305147386);
console.log(merek2);
console.log(merek2.nomorKendaraan);
