let people = ["Greg", "Mary", "Devon", "James"];
//No 1
for (let i = 0; i < people.length; i++)
{
 let hasil = people[i];
 console.log(hasil);
}
//No 2
people.forEach(function(data){console.log(data);
});

//No 3

people.splice(0,1);
console.log(people);

//No 4
people.splice(2,1);
console.log(people);
// No 5
people.unshift("Matt");
console.log(people);
// No 6
people.push("Your Name");
console.log(people);
// No 7
for (let i = 0; i < people.length; i++)
{

 console.log(people[i]);
 if(people[i] === "Mary")
 {
     break;
 }
//coba commit lagi
}

//No 8
let copy = people.slice(2);
console.log(copy);
//No 9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//No
withBob = people.concat("Bob");
console.log(withBob);





let programming ={
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty:8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//Nomor1
programming.languages.push("Go");
console.log(programming);
//Nomor2
programming.difficulty=7;
//Nomor3
delete programming.jokes;
//Nomor4
programming.isFun=true;
//Nomor5
programming.languages.map(function(item,index){
    console.log(`${index} - ${item}`)
})
