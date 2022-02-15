// cuma coba

////1. Destructuring (Array & Object)////
//Array Sebelum Es 6
// function getScores(){
//     return [1,2,3,4]
// }
// let scores = getScores();
// let x= scores[0],
//     y= scores[1],
//     z= scores[2]

// Array  ES 6

// let [x,y,z]= getScores();

//     console.log(x)
//     console.log(y)
//     console.log(z)

//Object Sebelum ES 6
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let name = person.name;
// let country = person.country;
// let job = person.job;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

//Object ES6

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name, country, job} = person;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"







////2. Destructuring dengan mengambil sebagian item (Array & Object)////

//Array
// let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

//Object

// let identitas = {
// 	nama: "Tony",
// 	umur: 19,
// 	alamat: "Manado"
// };

// let {nama, alamat} = identitas;

// console.log(nama);
// console.log(alamat);






////3. Destructuring dengan menggunakan default value (Array & Object)////

//Array
// let [greeting = "hi",name = "Sarah"] = ["hello"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

//object
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name = "myName", friend = "Annie"} = person;

// console.log(name);//"Sarah"
// console.log(friend);//"Annie"








////4. Destructuring dengan menggunakan rest operator (Array & Object)////

//Array
// let [x, y ,...args] = getScores();
// console.log(x); 
// console.log(y); 
// console.log(args);

//Object
// let person = {name: "Sarah", country: "Nigeria", job: "Developer" , friends: ["Annie", "Becky"]};

// let {name, country, ...others} = person;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(others);// {country: "Nigeria", job: "Developer"}
