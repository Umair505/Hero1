import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import { AuthContext } from '../../provider/AuthProvider';

const RightAside = () => {
    const {user} = use(AuthContext)
    return (
        <div className='space-y-8'>
             {user?"":<SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;