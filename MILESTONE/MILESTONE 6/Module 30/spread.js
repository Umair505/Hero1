const friends = ["Sakib","Rakib","Akib"];
// console.log(...friends);

// const newArray = ["Hero Alom", ...friends];
// console.log(...newArray);
const numbers = [1,34,2,12,4,2,2,1,100];

//Duplicate value delete will be deleted
const uniqueNumbers = [...new Set(numbers)];
console.log(...uniqueNumbers);

//Find maximum value
const max = Math.max(...uniqueNumbers);
console.log(max);

//Find minimum value
const min = Math.min(...numbers);
console.log(min);

