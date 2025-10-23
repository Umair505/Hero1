import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { FiClock, FiArrowRight, FiMapPin, FiUsers, FiCalendar } from "react-icons/fi";
import Loading from "./Loading";

const VolunteerNeedsNow = ({ volunteerPost }) => {
  const [posts] = useState(volunteerPost.data.data);
  const [loading] = useState(false);
  const [error] = useState(null);
  const navigate = useNavigate();

  // Professional color palette
  const colors = {
    primary: "rgb(74, 144, 226)", // Soft blue
    secondary: "rgb(100, 116, 139)", // Slate
    accent: "rgb(45, 212, 191)", // Teal
    background: "rgb(250, 250, 252)",
    card: "rgb(255, 255, 255)",
    text: {
      primary: "rgb(30, 41, 59)",
      secondary: "rgb(71, 85, 105)",
      light: "rgb(148, 163, 184)"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="text-center py-16 text-red-400">
        <div className="text-lg font-medium">Error loading volunteer posts</div>
        <div className="text-sm mt-2 text-gray-500">{error}</div>
      </div>
    );

  const getDaysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getUrgencyColor = (days) => {
    if (days <= 2) return "rgb(239, 68, 68)"; // Red
    if (days <= 5) return "rgb(245, 158, 11)"; // Amber
    return colors.primary; // Blue
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: "rgba(74, 144, 226, 0.1)",
              color: colors.primary
            }}
          >
            <FiUsers className="mr-2" />
            <span className="text-sm font-medium">Volunteer Opportunities</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl font-bold mb-6"
            style={{ color: colors.text.primary }}
          >
            Volunteer Needs Now
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.text.secondary }}
          >
            Discover meaningful opportunities to make a difference in your community. 
            Your time and skills can create lasting impact.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center mt-8 space-x-6 text-sm"
            style={{ color: colors.text.light }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
              Urgent (1-2 days)
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
              Soon (3-5 days)
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
              Upcoming
            </div>
          </motion.div>
        </motion.div>

        {/* Volunteer Posts Grid */}
        {posts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {posts.map((post) => {
              const daysUntilDeadline = getDaysUntilDeadline(post.deadline);
              const urgencyColor = getUrgencyColor(daysUntilDeadline);
              
              return (
                <motion.div
                  key={post._id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative"
                  style={{ backgroundColor: colors.card }}
                >
                  {/* Urgency Indicator */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: urgencyColor }}
                  ></div>

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.thumbnail || "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border"
                        style={{ 
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          color: colors.primary,
                          borderColor: "rgba(255, 255, 255, 0.5)"
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Days Left Badge */}
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                      style={{ backgroundColor: urgencyColor }}
                    >
                      {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left` : 'Last day'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm mb-3" style={{ color: colors.text.light }}>
                      <FiMapPin className="mr-1.5" size={14} />
                      <span className="mr-4">{post.location || "Remote"}</span>
                      <FiCalendar className="mr-1.5" size={14} />
                      <span>{new Date(post.deadline).toLocaleDateString()}</span>
                    </div>

                    <h3 
                      className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
                      style={{ color: colors.text.primary }}
                    >
                      {post.title}
                    </h3>

                    <p 
                      className="mb-4 line-clamp-3 text-sm leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      {post.description?.substring(0, 120)}...
                    </p>

                    {/* Skills/Requirements */}
                    {post.skillsRequired && post.skillsRequired.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {post.skillsRequired.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-md text-xs"
                              style={{
                                backgroundColor: "rgba(74, 144, 226, 0.1)",
                                color: colors.primary
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                          {post.skillsRequired.length > 3 && (
                            <span 
                              className="px-2 py-1 rounded-md text-xs"
                              style={{
                                backgroundColor: "rgba(100, 116, 139, 0.1)",
                                color: colors.secondary
                              }}
                            >
                              +{post.skillsRequired.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

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
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74, 144, 226, 0.1)" }}>
              <FiUsers size={40} style={{ color: colors.primary }} />
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.text.primary }}>
              No Opportunities Available
            </h3>
            <p className="text-lg max-w-md mx-auto" style={{ color: colors.text.secondary }}>
              Check back later for new volunteer opportunities in your area.
            </p>
          </motion.div>
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