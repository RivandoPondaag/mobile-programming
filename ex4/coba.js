
// Koloay, Gilby Ezra Albert
// Group 1
// Mobile App. Dev.
// Exercise 4

// 1. Promise
function helloWorld() { // a
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

const messages = async () => { // b
    const msg = await helloWorld();
    console.log("\n\n\n1. PROMISE");
    console.log(msg);
}

messages(); // c



// ====================================================================================================



// 2. Fetch (tidak ada error jika dijalankan di live server sir)

function ambilDataUser2() { // a
    fetch("https://reqres.in/api/users") // b
        .then(response => response.json()) // c
        .then(users => {console.log("\n\n\n2. FETCH"); console.log(users.data)}); // d
}

// ambilDataUser2 = () => {new Promise(() => {
//     fetch("https://reqres.in/api/users") // b
//         .then(response => response.json()) // c
//         .then(users => {console.log("\n\n\n2. FETCH"); console.log(users.data)}); // d
// })}

ambilDataUser2();



// ====================================================================================================



// 3. Async Await (tidak ada error jika dijalankan di live server sir)

// a (kalo pake 'users', tidak jadi sir)
// const ambildataUser3 = async () => {
//     try {
//         const response = await fetch("https://reqres.in/api/users");
//         const users = await response.users();
//         console.log("\n\n\n3. ASYNC AWAIT");
//         console.log(users.data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// a (klo pake 'json', jadi sir)
const ambildataUser3 = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        console.log("\n\n\n3. ASYNC AWAIT");
        console.log(json.data);
    }
    catch(error) {
        console.log(error);
    }
}

ambildataUser3();



// ====================================================================================================



// 4. Class
console.log("\n\n\n4.CLASS");

class Orang4 { // a
    constructor(nama, umur) { // b
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() { // c
        return `${this.nama} sedang bekerja seperti biasa.`;
    }
}

const user1 = new Orang4("Gilby", 20); // d
console.log(user1.bekerja());



// ====================================================================================================



// 5. Inheritance
console.log("\n\n\n5. INHERITANCE");

class Orang5 { // a
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    // b
    tidur() {
        return `${this.nama} sedang tidur.`;
    }

    makan() {
        return `${this.nama} sedang makan.`;
    }
}

class Pelajar extends Orang5 { // c
    constructor(nama, umur, namaSekolah) { // d
        super(nama, umur); // e
        this.namaSekolah; // f
        this.namaSekolah = namaSekolah; // g
    }

    belajar() {
        return `${this.nama} belajar di ${this.namaSekolah}.`;
    }
}

const user = new Pelajar("John", 17, "Unklab");
console.log(user.belajar());
