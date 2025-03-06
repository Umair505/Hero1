const moinul = {
    name: "Moinul",
    age: 25,
    city: "Dhaka",
    friends: ["Daud","Arafat","Tasin"],
    status:"not found"
}
// const moinulName = moinul.name;
// const moinulAge = moinul.age;
// const moinulStatus = moinul.status;
// const moinulCity = moinul.city;

//Destructuring
const {name,age,city,friends,status} = moinul;

// console.log(name);
// console.log(age);
// console.log(...friends);

const person = ["hero alom",{name: "Moinul"},"bapparaj"];

const [nayok,username] = person;

console.log(nayok,username);

