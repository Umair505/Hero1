class Product{
    malik = "Moinul Islam";
    
    constructor(name,price,brand,malik){
        this.name  = name;
        this.price = price;
        this.brand = brand;
        this.malik = malik;
    }
    details(){
        console.log(`I am ${this.name} and price ${this.price}`);
    }

}
const iphone = new Product("Iphone","1243","apple","Steve JObs");
console.log(iphone)

iphone.details()