import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/savePlanetRally.jpeg';
import img2 from '../assets/togetherGrp.png';
import img3 from '../assets/volunteer.jpg';
import { Link } from 'react-router';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: img1,
      text: 'Helping each other can make the world better',
      highlight: 'world better',
      subtext: 'Join hands with us to create meaningful change'
    },
    {
      image: img2,
      text: 'Small acts, when multiplied, can transform the world',
      highlight: 'transform the world',
      subtext: 'Your time and skills can make a real difference'
    },
    {
      image: img3,
      text: 'Volunteering is the ultimate exercise in democracy',
      highlight: 'ultimate exercise',
      subtext: 'Be part of something bigger than yourself'
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
  key={currentIndex}
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-black"
  style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center">
            <div className="text-center px-4 max-w-6xl mx-auto">
              <AnimatePresence>
                <motion.div
                  key={`text-${currentIndex}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ 
                    delay: 0.3,
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  <motion.h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    {slides[currentIndex].text.split(slides[currentIndex].highlight)[0]}
                    <motion.span 
                      className="text-[#6fe6c2] drop-shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      {slides[currentIndex].highlight}
                    </motion.span>
                    {slides[currentIndex].text.split(slides[currentIndex].highlight)[1]}
                  </motion.h1>
                  
                  <motion.p
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      delay: 0.8,
                      duration: 0.8
                    }}
                  >
                    {slides[currentIndex].subtext}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1,
                  duration: 0.8
                }}
              >
                <Link to="/volunteer-post">
                <button 
                  className="mt-8 px-10 py-4 bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)] text-white font-semibold rounded-full text-lg transition-all
                  shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 flex items-center mx-auto"
                >
                  <span>Become a Volunteer</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1.5
                    }}
                  >
                    →
                  </motion.span>
                </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
     
    </div>
  );
};

export default Carousel;