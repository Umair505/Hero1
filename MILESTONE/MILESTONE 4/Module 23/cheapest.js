const mobiles = [
    { name: 'iPhone 12', price: 150000 , color: 'black'},
    { name: 'Samsung Galaxy S21', price: 80000 , color: 'black'},
    { name: 'Xiaomi Mi 11', price: 60000 , color: 'black'},
    { name: 'OnePlus 9 Pro', price: 90000, color: 'black' },
    { name: 'Google Pixel 5', price: 120000, color: 'black' },
    { name: 'Vivo V20 Pro', price: 80000, color: 'black' },
    { name: 'Nokia 12', price: 60000, color: 'black' },
    { name: 'Sony XZ2 Compact', price: 70000 , color: 'black'},
    { name: 'Huawei P40 Pro', price: 110000, color: 'black' },
    { name: 'Realme X2 Pro', price: 90000, color: 'black' },
]
function getCheapestPhone(phones){
    let cheapestPhone = phones[0];
    for(const phone of phones)
    {
        if(phone.price < cheapestPhone.price)
            cheapestPhone =  phone;
    }
    return cheapestPhone;
}
function getHighestPhone(phones){
    let highestPhone = phones[0];
    for(const phone of phones)
    {
        if(phone.price > highestPhone.price)
            highestPhone =  phone;
    }
    return highestPhone;
}

console.log(getCheapestPhone(mobiles));
console.log(getHighestPhone(mobiles));