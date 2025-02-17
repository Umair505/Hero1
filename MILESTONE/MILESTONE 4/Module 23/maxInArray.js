const height = [63,38,87,30,65,80];

function getMax(numbers){
    let max  = numbers[0];
    // for(let i = 1; i < numbers.length; i++){
    //     if(numbers[i] > max){
    //         max = numbers[i];
    //     }
    // }
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}
console.log('The maximum height is: ' + getMax(height));

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers) {
        if(num<min)
            min = num;
    }
    return min;
}

console.log('The minimum height is: ' + getMin(height));