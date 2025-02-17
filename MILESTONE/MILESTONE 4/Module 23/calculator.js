// Simple calculator to call function inside a function

function add(n1,n2){
    return n1 + n2;
}

function subtract(n1,n2){
    return n1 - n2;
}

function multiply(n1,n2){
    return n1 * n2;
}

function divide(n1,n2){
    if(n2 !== 0){
        return n1 / n2;
    } else {
        return "Error: Division by zero is not allowed.";
    }
}

function calculator(operator, num1, num2){

    if(operator === 'add')
    {
        const result = add(num1, num2);
        return result;
    }
    else if(operator === 'subtract')
    {
        const result = subtract(num1, num2);
        return result;
    }
    else if(operator === 'multiply'){
        const result = multiply(num1, num2);
        return result;
    }
    else if(operator === 'divide'){
        const result = divide(num1, num2);
        return result;
    }
    else{
        return "Error: Invalid operator. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
}

const result = calculator('add',5,7);
const result2 = calculator('multiply',5,7);
const result3= calculator('divide',5,7);
console.log(result,result2,result3);