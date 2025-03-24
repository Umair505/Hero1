const person ={
    name: "Hero Alom",
    age: 20,
    city: "Dhaka",
    friends: ["Bapparaj", "Moinul"],
    status: "Single",
    family : {
        father: "Alom Khan",
        mother: "Hero Mahi",
        siblings: ["Hero Bappi", "Hero Bina"]
    }
}
const jsonData = JSON.stringify(person);
// console.log(jsonData);
const planeData = JSON.parse(jsonData);

// console.log(planeData);
// fetch
// fetch("url")
// .then(res => Response.json())
// .then(data =>console.log(data));

// const keys = Object.keys(person);
// console.log(keys);
// const values = Object.values(person);
// console.log(values);

const products = [
    { name : "Redmi", brand :"Xioami",price:30000,color : "Black"},
    { name : "Samsung Galaxy", brand :"Samsung", price:45000, color : "White"},
    { name : "Iphone", brand :"Apple", price:80000, color : "Silver"},
    { name : "OnePlus", brand :"OnePlus", price:65000, color : "Gold"},
    { name : "Nokia", brand :"Nokia", price:50000, color : "Blue"},
    { name : "Sony", brand :"Sony", price:75000, color : "Black"},
    
]
const newData = {
    name : "Walton",
    brand : "Walton",
    price : 31000,
    color : "Black"
}
const newArray = [...products,newData];

// console.log(newArray);
const remainingProducts = products.filter(p => p.brand !== "Xioami");

const remainingArray = [...remainingProducts,newData];
console.log(remainingArray);