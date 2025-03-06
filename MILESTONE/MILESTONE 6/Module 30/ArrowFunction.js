// function add(a,b)
// {
//     return a + b;
// }
// add(1,2)
// const sum2 = function(a,b){
//     return a + b;
// }
// console.log(sum2(1,2));

const add = (a,b) => a + b;

console.log(add(1,2));

const sqr = a =>a*a;

console.log(sqr(5));

document.getElementById("title").addEventListener("click",
    () =>{
        alert("Title Clicked");
    }
)