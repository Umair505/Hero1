// LeftAside.jsx
import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div className="p-4 h-full overflow-y-auto">
            <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;