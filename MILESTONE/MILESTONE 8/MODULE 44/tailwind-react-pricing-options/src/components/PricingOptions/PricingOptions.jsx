import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricingCard/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div>
            <h2 className='text-xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                    } */}
                {
                    pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)

                }
            </div>
        </div>
    );
};

export default PricingOptions;