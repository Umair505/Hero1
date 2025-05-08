import React from 'react';

const Footer = () => {
        return (
          <div className="relative mt-16 bg-gray-900">
            <svg
              className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-900"
              preserveAspectRatio="none"
              viewBox="0 0 1440 54"
            >
              <path
                fill="currentColor"
                d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
              />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                  <a
                    href="/"
                    aria-label="Go home"
                    title="Dragon News"
                    className="inline-flex items-center"
                  >
                    <svg
                      className="w-8 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577v-2.18c-3.338.726-4.033-1.61-4.033-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.089-.745.083-.73.083-.73 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.997.109-.774.419-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.382 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3.004-.404c1.02.004 2.048.138 3.004.404 2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.243 2.873.12 3.176.77.839 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                      Dragon News
                    </span>
                  </a>
                  <div className="mt-4 lg:max-w-sm">
                    <p className="text-sm text-gray-300">
                      Dragon News is your trusted source for the latest headlines, in-depth analyses, and real-time updates from around the world.
                    </p>
                    <p className="mt-4 text-sm text-gray-300">
                      Stay informed with curated journalism, breaking news alerts, and rich multimedia stories tailored for modern readers.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                  <div>
                    <p className="font-semibold tracking-wide text-red-500">
                      News Sections
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li><a href="/" className="text-gray-300 hover:text-red-400">World</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Politics</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Technology</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Sports</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold tracking-wide text-red-500">
                      Resources
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Newsletter</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Archives</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Submit Story</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">RSS Feeds</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold tracking-wide text-red-500">
                      Company
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li><a href="/" className="text-gray-300 hover:text-red-400">About Us</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Careers</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Privacy Policy</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Terms of Use</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold tracking-wide text-red-500">
                      Connect
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Contact</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Facebook</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">Twitter</a></li>
                      <li><a href="/" className="text-gray-300 hover:text-red-400">YouTube</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Dragon News. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                  <a href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="..." /></svg>
                  </a>
                  {/* Add more social icons or links as needed */}
                </div>
              </div>
            </div>
          </div>
        );
      
};

export default Footer;