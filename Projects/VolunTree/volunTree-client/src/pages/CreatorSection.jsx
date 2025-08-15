import React from "react";
import { motion } from "framer-motion";

const CreatorSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">Words From Our Founder</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl p-2 shadow-xl border border-emerald-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative lg:w-1/3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-md opacity-70 -z-10"></div>
              <img
                src="https://i.postimg.cc/90gHVsG1/photo-2025-08-12-23-30-35.jpg"
                alt="Moinul Islam Umair"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
              />
              
            </motion.div>
            
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-emerald-800 mb-1">Moinul Islam Umair</h3>
                <p className="text-lg text-emerald-600">Founder & Lead Developer</p>
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed relative">
                <span className="absolute -left-8 -top-6 text-7xl text-emerald-100 font-serif">"</span>
                <p className="relative z-10">
                  This platform was born from a vision to make charity and service accessible to every person. 
                  We believe that when technology meets sincere intention, we can revolutionize how humanity 
                  serves those in need, following the beautiful example of our Prophet Muhammad (ﷺ).
                  <br /><br />
                  Our mission is to connect compassionate hearts with meaningful opportunities, creating 
                  waves of positive change while purifying our own souls through selfless service.
                </p>
                <span className="absolute -right-6 -bottom-8 text-7xl text-emerald-100 font-serif">"</span>
              </blockquote>

              <div className="mt-8 flex justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/moinul505/"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-emerald-200 transition-all"
                >
                  Connect With Us
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CreatorSection;