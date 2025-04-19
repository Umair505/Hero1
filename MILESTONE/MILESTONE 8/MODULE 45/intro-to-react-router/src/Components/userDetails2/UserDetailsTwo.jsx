import React, { use } from 'react';

const UserDetailsTwo = ({userPromise}) => {
    const user = use(userPromise);
    const {name,username} = user;
    return (
        <div>
            <p><small>UserName : {username}</small></p>
            
        </div>
    );
};

export default UserDetailsTwo;