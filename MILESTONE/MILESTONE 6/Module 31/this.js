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
console.log(Abrar);
Abrar.greet();
console.log(Abrar.status);