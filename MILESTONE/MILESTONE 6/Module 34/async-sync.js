const loadData = async() => {
    try{
        console.log("I am first")
        console.log("I am second")
        //async
        setTimeout(() => {
            console.log("I am third")
        }, 100);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json();
        console.log(data);
        console.log("I am fourth")   
    }
    catch(error){
        console.error('Error:', error);
    }
}
loadData();

// fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json();
    console.log(data);
}
fetchData();