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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#eaf5f2]">
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
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      post.thumbnail ||
                      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-[rgb(5,127,104,0.1)] text-[rgb(5,127,104)] rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiClock className="mr-1" />
                      {new Date(post.deadline).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgb(3, 84, 63)", // Darker shade on hover
                      boxShadow: "0 4px 12px rgba(5, 127, 104, 0.3)",
                    }}
                    onClick={() => navigate(`/volunteer-need-post/${post._id}`)}
                    className="w-full flex items-center justify-center px-4 py-2 
             bg-[rgb(5,127,104)] text-white rounded-lg font-medium 
             transition-all duration-300 ease-in-out
             hover:text-gray-100 hover:shadow-lg"
                  >
                    <span className="relative group">
                      View Details
                      <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-white 
                    group-hover:w-full transition-all duration-300"
                      ></span>
                    </span>
                    <FiArrowRight
                      className="ml-2 transition-transform duration-300 
                          group-hover:translate-x-1"
                    />
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
