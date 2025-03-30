import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <div>
                {
                    bottles.map(bottle => <Bottle bottle ={bottle} key={bottle.id}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;