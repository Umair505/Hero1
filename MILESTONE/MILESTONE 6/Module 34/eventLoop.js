function a(){
    b();
    console.log('I am in a()');
}

function b(){
    c();
    console.log('I am in b()');
}
function c(){
    d();
    console.log('I am in c()');
}
function d(){
    console.log('I am in d()');
}
// a();

async function myFunction() {
    return "Hello";
   }
   myFunction().then(console.log);

   let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
}, 0); 
console.log(message);

try {
    console.log("Start");
    throw new Error("Error occurred");
   } catch (err) {
    console.log(err.message);
   } finally {
    console.log("End");
   }

   console.log("A");
   Promise.resolve().then(() => console.log("B"));
   setTimeout(() => console.log("C"), 0);
   console.log("D");

   let x = 1;
let intervalId = setInterval(() => {
 console.log(x++);
 if (x > 3) clearInterval(intervalId);
}, 1000);