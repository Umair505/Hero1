console.log(1);
console.log(2);
console.log(3);
let count = 0;
const clockId = setInterval(() =>{
    count++;
    console.log(count)
    if(count >=5)//off kore dibe
    {
        clearInterval(clockId);
    }
},1000)
console.log(clockId)
// setTimeout(() => {
//     console.log("Moinul!");
// }, 1000);
console.log(5);
console.log(6);