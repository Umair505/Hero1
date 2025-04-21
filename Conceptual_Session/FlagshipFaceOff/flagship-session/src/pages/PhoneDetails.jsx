import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    const {phoneId} = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(phoneId));
    const { name,image,description,brand,model,storage,camera_info, price } = singlePhone || {};
    return (
        <div className='w-full py-12'>
             <figure>
                    <img
                    className='w-full mx-auto md:w-auto mb-8'
                    src={image}
                    alt="Phone" />
                   <div className='flex justify-between'>
                       <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                        <div>
                        <button type='submit'  className="relative cursor-pointer inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Search</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                        </div>
                   </div>
                </figure>
        </div>
    );
};

export default PhoneDetails;