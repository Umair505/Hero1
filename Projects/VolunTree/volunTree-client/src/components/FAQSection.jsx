import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaHandsHelping, FaQuestionCircle, FaHeart } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      question: "What motivates you to donate to our charity?",
      answer: "We believe in transparent giving that creates measurable impact. Our donors are motivated by seeing exactly how their contributions transform lives through our quarterly impact reports."
    },
    {
      question: "How did you hear about our organization?",
      answer: "Most volunteers discover us through community events, social media, or word-of-mouth from our satisfied partners and beneficiaries."
    },
    {
      question: "How frequently do you prefer to volunteer?",
      answer: "We offer flexible opportunities ranging from one-time events to weekly commitments, accommodating all schedules and availability levels."
    },
    {
      question: "What motivated you to participate in this event?",
      answer: "Our events address pressing community needs while creating meaningful connections between volunteers and those they serve."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-100 opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-50 opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Section - Floating Image with smaller static image */}
        <motion.div
          className="relative w-full lg:w-1/2 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main floating image */}
          <motion.div
            className="relative"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="https://i.ibb.co/chzbCmMZ/openart-image-FK7j9-YBU-1752913513797-raw.png"
              alt="Volunteer helping community"
              className="rounded-2xl w-full max-w-md shadow-xl border-4 border-white"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <FaHandsHelping className="text-3xl text-teal-600" />
            </motion.div>
          </motion.div>

          {/* Additional static image - smaller and positioned differently */}
          <motion.div
            className="relative mt-6 self-end mr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <img
              src="https://i.ibb.co/PGmmFzhJ/Chat-GPT-Image-Jul-19-2025-11-28-35-AM.png"
              alt="Happy volunteers"
              className="rounded-lg w-64 shadow-lg border-4 border-white transform rotate-2"
            />
            <motion.div
              className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <FaHeart className="text-xl text-pink-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - FAQs */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaQuestionCircle className="text-2xl text-teal-600" />
            <span className="text-teal-600 font-semibold tracking-wider">
              HAVE QUESTIONS?
            </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Common <span className="text-teal-600">Volunteer</span> Queries
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                className={`overflow-hidden rounded-xl border ${
                  activeIndex === index 
                    ? "border-teal-200 bg-teal-50 shadow-md" 
                    : "border-gray-200 bg-white shadow-sm"
                } transition-all duration-300`}
                whileHover={{ y: -2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-medium ${
                    activeIndex === index ? "text-teal-700" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                      color: activeIndex === index || hoveredIndex === index 
                        ? "#0d9488" 
                        : "#6b7280"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;