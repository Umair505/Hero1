// const age = 10;
// localStorage.setItem("userAge",age);
// console.log(localStorage.getItem("userAge"));
// const handleAddToStorage = () =>{
//     const name = "Moinul Islam";
//     localStorage.setItem("Name",name);
// }
const handleAddToStorage = () =>{
    const person = {
        name : "Moinul",
        age : 24,
        friends: ["Daud","Dilon","Arfat"]
    }
    const convertedString =JSON.stringify(person);
    // const backToobject =JSON.parse(convertedString);
    localStorage.setItem("person",convertedString);
    // console.log(backToobject.name);

}
const data = localStorage.getItem("person");
const converted = JSON.parse(data);
console.log(converted.name);