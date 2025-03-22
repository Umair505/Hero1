// Array methods map filter find forEach
//array of objects
const products = [
    { name : "Redmi", brand :"Xioami",price:30000,color : "Black"},
    { name : "Samsung Galaxy", brand :"Samsung", price:45000, color : "White"},
    { name : "Iphone", brand :"Apple", price:80000, color : "Silver"},
    { name : "OnePlus", brand :"OnePlus", price:65000, color : "Gold"},
    { name : "Nokia", brand :"Nokia", price:50000, color : "Blue"},
    { name : "Sony", brand :"Sony", price:75000, color : "Black"},
]
const result = products.map(product =>product.brand);

// console.log(...result);

// ForEach doesn't return anything
// products.forEach(product =>console.log(product.price));

// Filter returns a new array
const resultFiltered = products.filter(product => product.price >= 5000);
// console.log(resultFiltered);

// Find returns the first element that passes the test implemented by the provided function
//find return an object
const result2 = products.filter(product => product.name === "Nokia");

console.log(result2);