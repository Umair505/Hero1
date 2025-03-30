import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const handleAddToCart =() =>{
        console.log('add to cart');
    }
    const bottles = use(bottlesPromise);
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} bottle ={bottle} key={bottle.id}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;