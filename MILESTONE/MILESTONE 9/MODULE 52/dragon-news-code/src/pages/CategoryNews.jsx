import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Category News - {id}</h1>
        </div>
    );
};

export default CategoryNews;