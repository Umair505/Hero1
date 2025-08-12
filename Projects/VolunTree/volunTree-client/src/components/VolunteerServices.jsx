import React from "react";
import { motion } from "framer-motion";
import bg from '../assets/bg.jpg';
import { FaHandsHelping, FaSearch, FaUserPlus } from "react-icons/fa";

const services = [
  {
    title: "Create Opportunities",
    icon: <FaHandsHelping className="text-3xl" />,
    description: "Post and manage volunteer opportunities easily. Connect with the right people who are eager to help.",
    color: "from-[#059f82] to-[#04785f]"
  },
  {
    title: "Find Opportunities",
    icon: <FaSearch className="text-3xl" />,
    description: "Discover a wide range of meaningful volunteer openings tailored to your interests and skills.",
    color: "from-[#3b82f6] to-[#1d4ed8]"
  },
  {
    title: "Join as Volunteer",
    icon: <FaUserPlus className="text-3xl" />,
    description: "Sign up, support causes you care about, and make a real difference in your community.",
    color: "from-[#8b5cf6] to-[#7c3aed]"
  },
];

const VolunteerServices = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-16 relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-black font-semibold text-sm tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Mission
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We Bridge People with Purpose
          </motion.h2>
          <motion.p
            className="text-black/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Connecting passionate volunteers with meaningful opportunities to create lasting impact.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#059f82] to-[#04785f] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-6 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-6 mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <motion.button
                  className={`mt-auto mx-auto px-6 py-2 text-white bg-gradient-to-r ${service.color} rounded-full shadow-md relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: -100, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

       
        
      </div>
    </div>
  );
};

export default VolunteerServices;