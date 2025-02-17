function getMax(n1,n2,n3){
    if(n1 > n2 && n1 > n3){
        console.log("Jim is the ultimate maximum")
    }
    else if(n2 > n1 && n2 > n3){
        console.log("Tim is the ultimate maximum")
    }
    else if(n3 > n1 && n3 > n2){
        console.log("Kim is the ultimate maximum")
    }
    else{
        console.log("All three numbers are equal")
    }
}
const jim = 56;
const tim = 29;
const kim = 98;

getMax(jim, tim, kim);

// Built in function
const max = Math.max(1,2,3,45,29);
console.log(max);