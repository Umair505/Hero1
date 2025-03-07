// const numbers = [1,2,4,5,6,7];
//map always returns array
// let temp = [];
// for(let i = 0;i<numbers.length;i++)
// {
//     const number = numbers[i];
//     const sum =  number + 1;
//     temp.push(sum)
// }
// console.log(temp);

// const newArray=numbers.map(value => value +  1);
// const newArray=numbers.map(value => console.log(value));
// console.log(newArray);

const numbers = [1,2,4,5,6,7];
const sqr = numbers.map(value =>{
    return value * value;
})
console.log(...sqr);