// function sum(a,b)
// {
//     const result = a + b;
// }
// console.log(result);//Not accessible
function sum(a,b)
{
    //behind the scenes it will declare var result2;
    var result = a + b;
    if(true){
        var result2 = a - b;
    }
    console.log(result2);//Accessible because of hoisting
}
sum(10,20);

//Hoisting var dia amra kichu declare kore js function er upore var dia declare kore rakhe behind the scene value assing korena just declare kore rakhe