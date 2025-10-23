import React, { useState, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiSearch, FiFilter, FiX, FiMapPin, FiUsers, FiCalendar, FiUser } from "react-icons/fi";

const VolunteerPosts = () => {
  const data = useLoaderData();
  const [posts, setPosts] = useState(data?.data.data || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const cats = posts.map(post => post.category);
    return ["All", ...new Set(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.organizerName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Discover meaningful volunteer opportunities and contribute to your community
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 text-teal-100">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FiUsers className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{posts.length}</div>
                  <div className="text-sm">Opportunities</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
                  <div className="text-sm">Categories</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          {/* Search Bar with Filter Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title, location, category, or organizer..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-medium transition-all shadow-sm ${
                showFilters || selectedCategory !== "All"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-teal-300"
              }`}
            >
              <FiFilter className="w-5 h-5" />
              <span>Filters</span>
              {selectedCategory !== "All" && (
                <span className="bg-white text-teal-600 px-2 py-0.5 rounded-full text-xs font-bold">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Category Filter Dropdown */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <FiFilter className="w-5 h-5 text-teal-600" />
                      Filter by Category
                    </h3>
                    {selectedCategory !== "All" && (
                      <button
                        onClick={() => setSelectedCategory("All")}
                        className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                      >
                        Clear Filter
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-md transform scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                        {category !== "All" && (
                          <span className="ml-2 text-xs opacity-75">
                            ({posts.filter(p => p.category === category).length})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters Display */}
          {(searchTerm || selectedCategory !== "All") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-3 flex-wrap"
            >
              <span className="text-sm text-gray-600 font-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg text-sm">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")}>
                    <FiX className="w-4 h-4" />
                  </button>
                </span>
              )}
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg text-sm">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("All")}>
                    <FiX className="w-4 h-4" />
                  </button>
                </span>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-gray-600"
        >
          <p className="text-lg">
            Showing <span className="font-semibold text-teal-600">{filteredPosts.length}</span> of{" "}
            <span className="font-semibold">{posts.length}</span> opportunities
          </p>
        </motion.div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                variants={cardVariants}
                layout
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold bg-white/95 text-teal-700 shadow-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  {post.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {/* Info Grid */}
                  <div className="space-y-3 mb-5">
                    {/* Location */}
                    <div className="flex items-start gap-3 text-gray-600">
                      <FiMapPin className="w-5 h-5 mt-0.5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm line-clamp-1">{post.location}</span>
                    </div>

                    {/* Organizer */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiUser className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm">By {post.organizerName}</span>
                    </div>

                    {/* Volunteers Needed */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiUsers className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {post.volunteersNeeded}{" "}
                        {post.volunteersNeeded === 1 ? "volunteer" : "volunteers"} needed
                      </span>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiCalendar className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm">
                        Deadline: {new Date(post.deadline).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => navigate(`/volunteer-need-post/${post._id}`)}
                    className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <span>View Details</span>
                    <FiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSearch className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No opportunities found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedCategory !== "All"
                  ? "Try adjusting your search or filter criteria"
                  : "There are currently no volunteer opportunities available"}
              </p>
              {(searchTerm || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VolunteerPosts;