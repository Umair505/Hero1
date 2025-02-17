function getMax(num1,num2){
    if(num1 > num2) return num1;
    else return num2;
}

const max1 = getMax(1,2);
const max2 = getMax(100,20);
const ultimateMax = getMax(max1,max2);
console.log(max1); 
console.log(max2);
console.log("Max of Two Is: ",ultimateMax)