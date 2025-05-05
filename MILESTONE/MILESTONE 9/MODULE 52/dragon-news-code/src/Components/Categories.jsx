import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res)=>res.json())
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories {categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(cat =>
                    <NavLink 
                    className='font-semibold text-accent btn bg-base-100 border-0 hover:bg-base-200'
                    key={cat.id}
                    to={`category/${cat.id}`}
                    >
                        {cat.name}
                    </NavLink>)

                }
            </div>
        </div>
    );
};

export default Categories;