const products = [
    {id: 1,name : "Iphone",color:"black",price:"12000","brand":"apple"},
    {id: 2,name : "Samsung",color:"white",price:"10000","brand":"samsung"},
    {id: 3,name : "OnePlus",color:"red",price:"8000","brand":"oneplus"},
    {id: 4,name : "Redmi",color:"blue",price:"7000","brand":"xiaomi"},
    {id: 5,name : "Nokia",color:"green",price:"6000","brand":"nokia"},
    {id: 6,name : "Sony",color:"yellow",price:"9000","brand":"sony"},
];
//for each return nothing
//Map return array
// products.forEach((product,index) =>{
//     if(product.color === "black" || product.color === "red"){
//         console.log(product.name);
//     }
// })

//Filter return new array
// const newArr = products.filter(product =>product.price > 8000);
// console.log(newArr);
//Find : It find through loop when it finds it return imediate one 
// const product = products.find(p => p.id === 3)
// console.log(product);

const newProducts =products.filter(p => p.id != 2);
console.log(newProducts);