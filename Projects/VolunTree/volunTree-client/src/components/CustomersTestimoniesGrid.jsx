import React from "react";
import { Link } from "react-router";

const VolunteerTestimonialsGrid = () => {
  return (
    <section
      id="testimonies"
      className="py-20 bg-gradient-to-b from-dark-green to-[#0a1a0f]"
    >
      <div className="max-w-6xl mx-8 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-emerald-50 rounded-lg md:text-center bg-emerald-700 bg-opacity-80 hover:cursor-pointer hover:bg-opacity-60 transition-all">
              Voices of Service
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-[#0F1529] md:text-center md:text-5xl">
              What Our Volunteers Say
            </h1>
            <p className="text-xl text-[#0F1529] md:text-center md:text-2xl">
              Stories from those who've served with us
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/CLJk1GJn/photo-2025-08-12-23-30-19.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Faisal Rahman"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Faisal Rahman
                      </h3>
                      <p className="text-emerald-300 text-md">
                        Food Distribution Volunteer
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Serving iftar meals during Ramadan was life-changing.
                    Seeing the gratitude in people's eyes reminded me of the
                    Prophet's ﷺ teachings on charity."
                  </p>
                </div>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/XNH1D9ck/photo-2025-08-12-23-30-26.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Moinul Islam"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Moinul Islam
                      </h3>
                      <p className="text-emerald-300 text-md">Quran Teacher</p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Teaching Quran to children through this platform has been
                    rewarding beyond measure. The light in their eyes when they
                    recite perfectly is my greatest ajr."
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul className=" space-y-8 sm:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/rFYs3QQj/photo-2025-08-13-20-10-19.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Mohammed Ali"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Mohammed Ali
                      </h3>
                      <p className="text-emerald-300 text-md">
                        Masjid Construction Volunteer
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Helping build masjids in underserved areas showed me the
                    true meaning of community. The Prophet ﷺ said: 'Whoever
                    builds a masjid for Allah, Allah will build for him a house
                    in Paradise.'"
                  </p>
                </div>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/Zndsmf6N/beautiful-curly-girl-pointing-finger.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Fatima Ahmed"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Fatima Ahmed
                      </h3>
                      <p className="text-emerald-300 text-md">
                        Women's Program Coordinator
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Organizing sisters' circles and educational programs has
                    strengthened my own iman while helping others. The bonds
                    we've formed are truly blessed."
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul className=" space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/Ls5TRCps/nurse-hijab-portrait-hospital.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Amina Hussein"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Amina Hussein
                      </h3>
                      <p className="text-emerald-300 text-md">
                        Medical Volunteer
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Providing free medical care through the mobile clinics has
                    been my way of fulfilling the hadith: 'The best charity is
                    giving water to drink.' Healing is a form of sadaqah."
                  </p>
                </div>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#0a1a0f] ring-1 ring-emerald-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.postimg.cc/ZRqLbfzR/photo-2025-08-12-23-29-54.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full border-emerald-500"
                      alt="Umair Mahmood"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Umair Mahmood
                      </h3>
                      <p className="text-emerald-300 text-md">
                        Charity Distribution Lead
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-emerald-100 text-md">
                    "Managing our charity network taught me that every donation
                    is an amanah. The Prophet ﷺ said: 'The believer's shade on
                    Judgment Day will be his charity.'"
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link to='/create-post'>
          <button className="relative overflow-hidden group bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Share Your Volunteer Story
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerTestimonialsGrid;
