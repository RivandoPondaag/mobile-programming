///////////////////////////////////////////////////////////////( 1. Promise )///////////////////////////////////////////////////////////////

function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

const messages = async () => { 
    const msg = await helloWorld();
    console.log(msg);
}

messages();

///////////////////////////////////////////////////////////////( 1. Promise )///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////( 2. Fetch )///////////////////////////////////////////////////////////////

function AmbilDataUser() {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(users => {console.log(users.data)});
}

AmbilDataUser = () => {new Promise(() => {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(users => {console.log(users.data)});
})}

AmbilDataUser();

///////////////////////////////////////////////////////////////( 2. Fetch )///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////( 3. Async Await )///////////////////////////////////////////////////////////////

const ambildataUser = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        console.log(json.data);
    }
    catch(error) {
        console.log(error);
    }
}

ambildataUser();

///////////////////////////////////////////////////////////////( 3. Async Await )///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////( 4. Class )///////////////////////////////////////////////////////////////

class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() {
        return `${this.nama} sedang bekerja seperti biasa.`;
    }
}

const user1 = new Orang("Chriss", 24);
console.log(user1.bekerja());

///////////////////////////////////////////////////////////////( 4. Class )///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////( 5. Inheritance )///////////////////////////////////////////////////////////////

class orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    tidur() {
        return `${this.nama} sedang tidur.`;
    }

    makan() {
        return `${this.nama} sedang makan.`;
    }
}

class pelajar extends orang {
    constructor(nama, umur, namaSekolah) {
        super(nama, umur);
        this.namaSekolah;
        this.namaSekolah = namaSekolah;
    }

    belajar() {
        return `${this.nama} belajar di ${this.namaSekolah}`;
    }
}

const user = new pelajar("John", 17, "Unklab");
console.log(user.belajar());

///////////////////////////////////////////////////////////////( 5. Inheritance )///////////////////////////////////////////////////////////////

//nambah komen
