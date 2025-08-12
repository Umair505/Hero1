import React from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/error-animation.json';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl w-full text-center">
        {/* Animated illustration */}
        <motion.div 
          className="mx-auto w-full max-w-md"
          variants={itemVariants}
        >
          <Lottie 
            animationData={errorAnimation} 
            loop={true} 
            className="w-full h-auto"
          />
        </motion.div>
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist or has been moved. Don't worry, you can find your way back home.
        </motion.p>

        {/* Interactive elements */}
        <motion.div variants={itemVariants}>
          <Link to="/">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium text-lg shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>


        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-200 opacity-30"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;