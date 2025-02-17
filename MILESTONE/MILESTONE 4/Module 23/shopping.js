const numbers = [200,100,2003,200,100,2003];

const products = [
    { id: 1, name: 'Product 1', price: 300,quantity: 2 },
    { id: 2, name: 'Product 2', price: 100,quantity: 3 },
    { id: 3, name: 'Product 3', price: 700,quantity: 5 },
    { id: 4, name: 'Product 4', price: 1200,quantity: 1 },
]
function getShoppingCart(products)
{
    let sum = 0;
    for(const product of products){
        sum += product.price * product.quantity;
    }
    return sum;
}

const totalPrice = getShoppingCart(products);
console.log(totalPrice);