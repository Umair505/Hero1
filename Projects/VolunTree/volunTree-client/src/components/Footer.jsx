import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../src/assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 py-10 ">
      <div className="max-w-screen-xl  mx-auto">
        {/* Top text */}
        <div className="text-center text-lg md:text-xl font-medium mb-10">
          Small acts, big impact – start your journey today.
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300">
          {/* Brand / Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                <img src={logo} className='w-8' alt="" />
              </div>
              <span className="text-2xl text-white font-semibold">VolunTree</span>
            </div>
            <p className="text-sm text-gray-400">
              Join hands and grow stronger—one act of kindness at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Get Involved</a></li>
              <li><a href="#" className="hover:text-white">Volunteer</a></li>
              <li><a href="#" className="hover:text-white">Donate</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold text-white mb-3">Stay Connected</h4>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:hello@voluntree.org" className="hover:text-white">hello@voluntree.org</a></li>
              <li>Phone: <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></li>
            </ul>
            <h4 className="font-semibold text-white mt-4 mb-2">Visit Us</h4>
            <p>123 Greenway Blvd, Hope City, HC 45678</p>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex items-center space-x-4 mb-6">
              <a href="https://www.facebook.com/moinul.islam.umair.505" className="bg-white text-[#057F68] p-2 rounded-full hover:bg-[#057F68] hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://github.com/Umair505" className="bg-white text-[#057F68] p-2 rounded-full hover:bg-[#057F68] hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white text-[#057F68] p-2 rounded-full hover:bg-[#057F68] hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/moinul505/" className="bg-white text-[#057F68] p-2 rounded-full hover:bg-[#057F68] hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
            <form className="flex items-center bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-sm text-gray-800 flex-grow focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#057F68] text-white px-4 py-2 rounded-r-full hover:bg-[#046456] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
  &copy; {new Date().getFullYear()} VolunTree. All rights reserved. Developed by <a 
  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-white font-medium"
>
  Moinul
</a>
.
</div>

      </div>
    </footer>
  );
};

export default Footer;
