const person = {
    name : "Moinul",
    age : 25,
    city : "Dhaka",
    friends : ["Daud","Arafat","Tasin"],
    details :{
        job : "No",
        isMarried : false,
        status : "found",
        1: 100,
        true : "founded",
        father:{
            name : "Mahmud",
            age : 50
        }
    }
}
// console.log(person.name)
// console.log(person.friends[0]);
console.log(person.details?.mother?.name);

// console.log(person["name"]);
console.log(person["details"]["job"]);

console.log(person["details"]["1"]);
console.log(person["details"]["true"]);