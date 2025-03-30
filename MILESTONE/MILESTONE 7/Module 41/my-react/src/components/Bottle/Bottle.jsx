import React from 'react';
import './bottle.css';
const Bottle = ({bottle,handleAddToCart}) => {
    const {img,name,price,stock} = bottle;
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <p>Available : {stock}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;