class Vehicle{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }
    move(){
        console.log(`${this.name} is moving`);
    }
    getPrice(){
        return this.price;
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat)
    {
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log(`${this.name} is routeing dhaka to cox's`);
    }
    getSeat(){
        return this.seat;
    }
}

const greenLine = new Bus("Green Line","12",50);
console.log(greenLine);

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
    loadCargo(){
        console.log(`${this.name} is loading cargo`);
    }
}