import React from 'react';
import './bottle.css';
const Bottle = ({bottle}) => {
    const {img} = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;