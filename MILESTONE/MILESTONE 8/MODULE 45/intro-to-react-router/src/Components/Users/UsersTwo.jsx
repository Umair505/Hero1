import React, { use } from 'react';

const UsersTwo = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default UsersTwo;