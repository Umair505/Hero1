import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
import { addToCartSto } from '../../utilities/LocalStorage.js/localStorage';
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const handleAddToCart =(bottle) =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToCartSto(bottle.id);
        // Save the bottle id into the storage
    }
    const bottles = use(bottlesPromise);
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} bottle ={bottle} key={bottle.id}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;