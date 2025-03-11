const person ={
    name: "Hero Alom",
    age: 25,
    city: "Dhaka",
    friends: ["Bapparaj", "Moinul"],
    status: "Single"
}
//object to string
const newPerson = JSON.stringify(person);

console.log(newPerson);
//string to object
const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);