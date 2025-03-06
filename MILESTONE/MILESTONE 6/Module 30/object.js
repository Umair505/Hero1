const person = {
    name : "John",
    age: 30,
    country: "United",
    address: {
        street: "123 Main St",
        city: "New York"
    }
}
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

//Property values can be changed but new properties cannot be added
Object.seal(person);
person.status = "active";
person.name = "John Smith"

// console.log(person);

//New properties cannot be added and properties values cannot be changed

Object.freeze(person);
person.status = "inactive";
person.name = "John Doe"

// console.log(person);

// Loop through an object using for in, for of, object entries
console.log(person["name"]);

// for(let key in person)
// {
//     console.log(`key : ${key}  Value: ${person[key]}`);
// }
// for(let key of Object.entries(person))
// {
//     console.log(key);
// }
for(let [key,value] of Object.entries(person))
{
    console.log(`key : ${key}  Value: ${value}`);
}

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj)

let a = 12, b = 3;

[a, b] = [b, a];

console.log(a, b); // Outputs: 3, 12