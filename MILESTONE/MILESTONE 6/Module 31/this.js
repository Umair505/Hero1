// const person = {
//     name : "Moinul",
//     action: function(){
//         console.log(this.name);
//     }
    
// }
// person.action();
class person{
    #status
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
const Abrar = new person("Abrar","24","Single");
// console.log(Abrar);
// Abrar.greet();
// console.log(Abrar.status);

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};

console.log(x, y, z);