import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn w-full btn-primary btn-outline'><FcGoogle size={24}></FcGoogle> Login With Google</button>
                <button className='btn w-full btn-secondary btn-outline'><FaGithub size={24}></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;