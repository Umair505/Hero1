// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;
// console.log(result);
// console.log("Hello world!");
// const handleUser = () =>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }
// handleUser()
const handleUser2 = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        console.error('Error:', error);
    }
}
handleUser2();
