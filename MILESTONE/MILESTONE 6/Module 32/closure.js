const sum = () =>{
    let count = 0;
    return () =>{
        count++;
        console.log(count);
    }
}

const counter = sum();

counter();//1
counter();//2
counter();//3
const counter2 = sum();
counter2();
counter2();
counter2();
counter2();

counter();