// const person ={
//     name: "Hero Alom",
//     age: 25,
//     city: "Dhaka",
//     friends: ["Bapparaj", "Moinul"],
//     status: "Single"
// }
// //object to string
// const newPerson = JSON.stringify(person);

// console.log(newPerson);
// //string to object
// const newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2);

const LoadUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showUser(data))
}
const showUser = (users) =>{
    const userContainer = document.getElementById("users");

    users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = ` Name: ${user.name} <br> ID - ${user.id}`
        userContainer.appendChild(li);

    });
}