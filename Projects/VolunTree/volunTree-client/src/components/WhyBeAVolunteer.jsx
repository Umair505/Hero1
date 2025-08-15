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
