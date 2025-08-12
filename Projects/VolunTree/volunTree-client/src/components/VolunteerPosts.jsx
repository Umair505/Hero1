import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const VolunteerPosts = () => {
  const data = useLoaderData();
  const [posts, setPosts] = useState(data?.data.data || []);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // Filter posts based on search term (searches title, location, and category)
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Volunteer Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-3 text-lg text-gray-600"
          >
            Find meaningful ways to contribute to your community
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search volunteer posts..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post._id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[rgb(5,127,104,0.1)] text-[rgb(5,127,104)] mb-2">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{post.location}</span>
                  </div>

                  {/* Volunteers Needed */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-sm">
                      {post.volunteersNeeded}{" "}
                      {post.volunteersNeeded === 1 ? "volunteer" : "volunteers"}{" "}
                      needed
                    </span>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">
                      Deadline: {new Date(post.deadline).toLocaleDateString()}
                    </span>
                  </div>

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
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No volunteer posts found
            </h3>
            <p className="mt-1 text-gray-500">
              {searchTerm
                ? "Try adjusting your search term"
                : "There are currently no volunteer opportunities"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VolunteerPosts;
