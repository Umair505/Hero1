import React from "react";
import { motion } from "framer-motion";

const CreatorSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">From The Founder</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-8 md:p-12 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://i.postimg.cc/8z8JQZJx/creator.jpg"
              alt="Moinul Islam Umair"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-emerald-200 shadow-md"
            />
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">Moinul Islam Umair</h3>
              <p className="text-emerald-600 mb-4">Founder & Lead Developer</p>
              
              <blockquote className="text-gray-700 italic relative">
                <span className="absolute -left-6 -top-4 text-5xl text-emerald-200">"</span>
                <p className="relative">
                  This platform was born from a vision to make Islamic charity and service accessible 
                  to every Muslim. We believe that when technology meets sincere intention, we can 
                  revolutionize how the Ummah serves those in need, following the beautiful example 
                  of our Prophet Muhammad (ﷺ).
                </p>
                <span className="absolute -right-4 -bottom-8 text-5xl text-emerald-200">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CreatorSection;