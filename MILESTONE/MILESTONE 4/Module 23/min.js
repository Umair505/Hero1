// Find the cheapest phone from an array of phone objects

const prices = [20000,30000,34000,20200,100000]
function getMin(numbers) {
    let min = numbers[0];
    for(const number of numbers) {
        if(number < min){
            min = number;
        }
    }
    return min;
}
console.log(`Cheapest phone is ${getMin(prices)}`);