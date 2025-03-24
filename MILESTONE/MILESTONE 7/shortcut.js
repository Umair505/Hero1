// False-Value
//0 -0," ",false,null,undefined
// const test ={};

// test ? console.log("It's truthy") : console.log("It's falsy");

// const a = 10;
// const result = (a>=10 && a <20) ? "True":"False";
// console.log(result);
const isActive = false;

const showUser = () => console.log("User is active");
const hideUser = () => console.log("User is not active");

// isActive ? showUser() : hideUser();

// isActive && showUser();

//if not active then hide user will be called else nothing will be called
// isActive || hideUser();

// Type conversions
let num = "10";
// +num;
console.log(typeof +num);