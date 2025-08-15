import React from "react";
import { HeroVideoDialog } from "./HeroVideoDialog";
import { Link } from "react-router";

const WhyBeAVolunteer = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-gray py-16 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
          The Blessings of Volunteering
        </h1>
        <p className="text-xl text-dark-gray dark:text-light-gray mb-8">
          "The believer's shade on the Day of Resurrection will be his charity."
          <span className="block mt-2 text-primary-green">(Al-Tirmidhi)</span>
        </p>
      </div>

      {/* Main Content with Centered Video */}
      <div className="max-w-6xl mx-auto">
        {/* Video Section - Centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-3xl relative">
            <div className="relative group">
              <HeroVideoDialog
                className="block dark:hidden shadow-lg rounded-xl overflow-hidden w-full"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/2szQhR4oZtA?autoplay=1"
                thumbnailSrc="https://i.postimg.cc/CdypTCsN/Why-be-a-Volunteer-1280x720.jpg"
                thumbnailAlt="The Rewards of Volunteering in Islam"
                playButtonClass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group-hover:scale-110"
                playIconClass="text-primary-green text-2xl ml-1"
              />
              <HeroVideoDialog
                className="hidden dark:block shadow-lg rounded-xl overflow-hidden w-full"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/2szQhR4oZtA?autoplay=1"
                thumbnailSrc="https://i.postimg.cc/CdypTCsN/Why-be-a-Volunteer-1280x720.jpg"
                thumbnailAlt="The Rewards of Volunteering in Islam"
                playButtonClass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group-hover:scale-110"
                playIconClass="text-primary-green text-2xl ml-1"
              />
            </div>
            <p className="text-center mt-4 text-accent-teal">
              Watch: The Spiritual Benefits of Serving Others
            </p>
          </div>
        </div>

        {/* Motivational Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-light-gray/20 dark:bg-dark-gray/70 p-6 rounded-xl border-l-4 border-primary-green">
              <h3 className="text-2xl font-semibold text-primary-green mb-4">
                Allah's Promise
              </h3>
              <p className="text-dark-gray dark:text-light-gray">
                "Whoever relieves a believer's distress of the distressful
                aspects of this world, Allah will rescue him from a difficulty
                of the difficulties of the Hereafter."
                <span className="block mt-2 text-accent-teal">
                  (Sahih Muslim)
                </span>
              </p>
            </div>

            <div className="bg-light-gray/20 dark:bg-dark-gray/70 p-6 border-l-4 border-primary-green rounded-xl">
              <h3 className="text-2xl font-semibold text-primary-green mb-4">
                The Ripple Effect
              </h3>
              <p className="text-dark-gray dark:text-light-gray">
                "If anyone calls others to follow right guidance, his reward
                will be equivalent to those who follow him without their rewards
                being diminished in any respect."
                <span className="block mt-2 text-accent-teal">
                  (Sahih Muslim)
                </span>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-light-gray/20 dark:bg-dark-gray/70 p-6 rounded-xl border-l-4 border-accent-teal">
              <h3 className="text-2xl font-semibold text-primary-green mb-4">
                Purification Through Service
              </h3>
              <p className="text-dark-gray dark:text-light-gray">
                "Charity extinguishes sin as water extinguishes fire."
                <span className="block mt-2 text-accent-teal">
                  (Al-Tirmidhi)
                </span>
              </p>
              <p className="mt-4 text-dark-gray dark:text-light-gray">
                Volunteering cleanses the heart and strengthens the soul. Each
                act of kindness is recorded as an act of worship when done with
                sincerity.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4">
                Join Our Blessed Mission
              </h3>
              <p className="mb-6">
                Become part of a community that strives to please Allah through
                service to His creation. Your time and skills can bring light to
                those in need.
              </p>
              <Link
                to="/volunteer-post"
                className="px-8 py-3 relative rounded-lg group overflow-hidden font-medium bg-green-50 text-green-600 inline-block transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 from-green-500 to-teal-500 bg-gradient-to-r group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white flex items-center gap-2">
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
                  Start Your Volunteer Journey
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Final Inspirational Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-dark-gray dark:text-light-gray max-w-3xl mx-auto">
            "The best of people are those that bring most benefit to the rest of
            mankind."
            <span className="block mt-4 text-xl not-italic text-primary-green">
              - Prophet Muhammad (ﷺ)
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhyBeAVolunteer;
