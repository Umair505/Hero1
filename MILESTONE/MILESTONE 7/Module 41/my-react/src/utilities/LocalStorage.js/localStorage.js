// 1-To get something from local storage ,you will get it as a string

const getCartFromLocalStorage =() =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}
const saveCartToLocalStorage =(cart) =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}
const addItemCartLocalStorage = (id) =>
{
    const cart = localStorage.getItem();
    const newCart = [...cart,id];
    saveCartToLocalStorage(newCart);
    //save new cart into local storage
}
export {getCartFromLocalStorage as getStoredCart,addItemCartLocalStorage as addToCartSto};