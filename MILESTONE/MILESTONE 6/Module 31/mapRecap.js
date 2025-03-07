const products = [
    {id: 1,name : "Iphone",color:"black",price:12000,brand:"apple"},
    {id: 2,name : "Samsung",color:"white",price:10000,brand:"samsung"},
    {id: 3,name : "OnePlus",color:"red",price:8000,brand:"oneplus"},
    {id: 4,name : "Redmi",color:"blue",price:7000,brand:"xiaomi"},
    {id: 5,name : "Nokia",color:"green",price:6000,brand:"nokia"},
    {id: 6,name : "Sony",color:"yellow",price:9000,brand:"sony"},
];
const newProducts = products.map(p => {
    if( p.brand === "apple")
    {
     p.price = p.price + 100;
    }
    return p;
})
console.log(newProducts)