import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { FiClock, FiArrowRight } from "react-icons/fi";
import Loading from "./Loading";

const VolunteerNeedsNow = ({ volunteerPost }) => {
  const [posts] = useState(volunteerPost.data.data);
  const [loading] = useState(false);
  const [error] = useState(null);
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    },
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading volunteer posts: {error}
      </div>
    );

  return (
   <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f2f9f1] to-[#e8f5e9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Volunteer Needs Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Urgent opportunities with approaching deadlines
          </motion.p>
        </div>

        {posts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
  <motion.div
    key={post._id}
    variants={cardVariants}
    whileHover="hover"
    initial="hidden"
    animate="visible"
    className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-[rgb(5,127,104,0.2)]"
  >
    {/* Image with gradient overlay */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={post.thumbnail || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1 bg-white/90 text-[rgb(5,127,104)] rounded-full text-sm font-semibold shadow-md backdrop-blur-sm">
          {post.category}
        </span>
      </div>
    </div>

    {/* Card Content */}
    <div className="p-6 relative">
      {/* Floating date badge */}
      <div className="absolute -top-5 right-6 bg-white px-3 py-2 rounded-lg shadow-md border border-gray-100 flex items-center text-gray-700 text-sm font-medium">
        <FiClock className="mr-1.5 text-[rgb(5,127,104)]" />
        {new Date(post.deadline).toLocaleDateString()}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[rgb(5,127,104)] transition-colors duration-300">
        {post.title}
      </h3>

      <p className="text-gray-600 mb-5 line-clamp-2 text-sm">
        {post.description?.substring(0, 100)}...
      </p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.02,
          backgroundColor: "rgb(3, 84, 63)",
          boxShadow: "0 8px 20px rgba(5, 127, 104, 0.4)",
        }}
        onClick={() => navigate(`/volunteer-need-post/${post._id}`)}
        className="w-full flex items-center justify-center px-6 py-3 
        bg-gradient-to-r from-[rgb(5,127,104)] to-[rgb(7,156,128)] 
        text-white rounded-xl font-semibold text-sm
        transition-all duration-300 ease-in-out
        hover:shadow-lg relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          View Details
          <FiArrowRight className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[rgb(7,156,128)] to-[rgb(5,127,104)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.button>
    </div>
  </motion.div>
))}
          </motion.div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No volunteer opportunities available at the moment.
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/volunteer-post")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
          >
            See All Opportunities
            <FiArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
