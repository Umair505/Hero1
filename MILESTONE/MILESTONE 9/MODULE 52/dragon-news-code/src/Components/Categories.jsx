import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res)=>res.json())
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories {categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map(cat =>
                        <NavLink 
                        className={({ isActive }) => 
                            `block p-3 rounded-lg transition-all ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`
                        }
                        key={cat.id}
                        to={`/category/${cat.id}`}
                    >
                        {cat.name}
                    </NavLink>)

                }
            </div>
        </div>
    );
};

export default Categories;
