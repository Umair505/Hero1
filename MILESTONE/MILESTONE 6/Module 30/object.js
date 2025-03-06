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
console.log(Object.values(person));
console.log(Object.entries(person));

//Property values can be changed but new properties cannot be added
Object.seal(person);
person.status = "active";
person.name = "John Smith"

console.log(person);

//New properties cannot be added and properties values cannot be changed

Object.freeze(person);
person.status = "inactive";
person.name = "John Doe"

console.log(person);