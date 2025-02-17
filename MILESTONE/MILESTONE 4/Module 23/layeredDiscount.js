/**
 * first100 --> 100
 * 101 to 200 --> 90
 * above 200 --> 70
 */
function layerDiscountTotal(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
    } else if (quantity <= 200) {
        const first100 = quantity * 100;
        const remaining = (quantity - 100)*90;
        return first100 + remaining;
    } else {
        const first100 = 100 * 100;
        const second100 = 100 * 90;
        const remaining = (quantity - 200);
        const remainingPrice = remaining * 70;

        return first100 + second100 + remainingPrice;
    }
}

console.log(layerDiscountTotal(101)); 
console.log(layerDiscountTotal(200)); 
console.log(layerDiscountTotal(202)); 