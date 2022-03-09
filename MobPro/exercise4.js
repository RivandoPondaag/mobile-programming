/*
Topit, Alfan Fabio Andrew
Mobile App Dev D
*/

//1.promise
function helloworld()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Hello World!");
            console.log("Promise")
        }, 2000);
    })
}

const messages = async () => {
    const msg = await helloworld();
    console.log(msg);
}

messages();

//2.Fetch
function ambilDataUser(){
    
    fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(users => console.log(users.data))
  
}

ambilDataUser();

//3.Fetch menggunakan async/await
const ambilDataUser2 = async( )=> {
    try {
   const response = await fetch('https://reqres.in/api/users')
  const json = await response.json()
  //jika menggunakan response maka akan ada error response.users is not a function
  console.log(json.data)
    }
    catch(error)
    {
        console.log(error)
    }
}

ambilDataUser2();

//4.class
class orang 
{
    constructor(nama, umur){
        this.nama = nama
        this.umur =  umur
    }
     
    bekerja(){
       return `${this.nama} Sedang bekerja seperti biasa`
    }
}
const user1 = new orang("Alfan", 20)
console.log(user1.bekerja())

//5.inheritance
class orang1
{
    constructor(nama, umur)
    {
        this.nama = nama
        this.umur = umur
    }

    tidur(){
        return `${this.nama} sedang tidur`
    }
    makan(){
        return `${this.nama} sedang makan`
    }
}


const user3 = new orang1("Alfan", 20);
console.log(user3.tidur());
console.log(user3.makan());

class pelajar extends orang1{
    constructor(nama, umur, namaSekolah){
        super(nama, umur)
        this.namaSekolah
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}

const user = new pelajar("Alfan", 20, "Unklab");
console.log(user.belajar());