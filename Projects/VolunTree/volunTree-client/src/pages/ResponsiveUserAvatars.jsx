import React from "react";
import { motion } from "framer-motion";

const ResponsiveUserAvatars = () => {
  const volunteers = [
    { src: "https://randomuser.me/api/portraits/men/32.jpg", name: "Abdullah" },
    { src: "https://randomuser.me/api/portraits/women/44.jpg", name: "Aisha" },
    { src: "https://randomuser.me/api/portraits/men/22.jpg", name: "Omar" },
    { src: "https://randomuser.me/api/portraits/women/63.jpg", name: "Fatima" },
    { src: "https://randomuser.me/api/portraits/men/41.jpg", name: "Yusuf" },
    { src: "https://randomuser.me/api/portraits/women/50.jpg", name: "Mariam" },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-white rounded-xl shadow-md">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-semibold text-emerald-800 mb-2">
          Our Volunteer Community
        </h3>
        <p className="text-gray-600">
          "The believers are like one body in mutual love and compassion"
          <span className="block text-emerald-600 mt-1">(Muslim)</span>
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="font-semibold text-emerald-700">Trusted by</div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {volunteers.map((volunteer, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="inline-block h-12 w-12 rounded-full ring-2 ring-emerald-100 hover:ring-emerald-300 transition-all"
                src={volunteer.src}
                alt={volunteer.name}
                title={volunteer.name}
              />
            ))}
          </div>
          <div className="text-gray-600">Join 5,000+ volunteers</div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveUserAvatars;