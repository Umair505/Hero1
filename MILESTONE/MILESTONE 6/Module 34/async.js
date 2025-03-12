const a = 10;
const b = 20;
const sum = a + b;

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res  => res.json)
// .then(data => console.log(data))
console.log("I am first")

setTimeout(() =>{
console.log("I am second");

},3000);
test();

function test(){
    console.log("Hello from test function");
}