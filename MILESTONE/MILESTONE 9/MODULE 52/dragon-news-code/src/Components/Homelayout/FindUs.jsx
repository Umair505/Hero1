import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
            <div className="join join-vertical w-full">
                <Link to="https://www.facebook.com/moinul.islam.umair.505" target='/' className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</Link>
                <Link className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</Link>
                <Link className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</Link>
            </div>
            </div>
        </div>
    );
};

export default FindUs;