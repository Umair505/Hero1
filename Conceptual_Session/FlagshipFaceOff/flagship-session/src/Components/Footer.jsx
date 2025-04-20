import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by FlagShipFaceOff Industries Ltd</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;