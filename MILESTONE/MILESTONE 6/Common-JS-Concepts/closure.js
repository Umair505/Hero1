

function sum() {
    let counter = 0;
    return function () {
        counter ++;
    console.log(counter)
    }
   
}

const result1 = sum();
result1();
result1();

const result12 = sum();
result12()

result1();




