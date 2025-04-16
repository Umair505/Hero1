import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const { id, name, price, description,features } = pricing;
    return (
        <div className='flex flex-col border text-black bg-amber-200 p-4 rounded-2xl shadow-lg'>
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className='flex-1 m-2'>
                <p className='text-xl pt-3'>{description}</p>
                {
                    features.map((feature,index) =><PricingFeature feature={feature} key={index}></PricingFeature>)           

                }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
        

    );
};

export default PricingCard;