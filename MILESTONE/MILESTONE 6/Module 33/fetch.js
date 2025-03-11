// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })


const handleloadData =() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
    console.log(data);
})

}