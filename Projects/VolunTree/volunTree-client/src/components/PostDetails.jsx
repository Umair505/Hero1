import React, { useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaUser, FaEnvelope, FaClock, FaArrowLeft } from 'react-icons/fa';
import VolunteerRequestModal from './VolunteerRequestModal'; // Import the modal component

const PostDetails = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const { data } = useLoaderData();
    const [post, setPost] = useState(data?.data || {});
    const [showModal, setShowModal] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    if (!post._id) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center p-8 bg-white rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-[rgb(5,127,104)] text-white rounded-lg hover:bg-[rgb(4,107,87)] transition-colors"
                    >
                        Back to Home
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Volunteer Request Modal */}
            {showModal && (
                <VolunteerRequestModal 
                    onClose={() => setShowModal(false)}
                    post={post}
                />
            )}

            {/* Hero Image Section - Full Width */}
            <div className="relative w-full h-96 md:h-screen max-h-[80vh] overflow-hidden">
                <motion.img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-10 p-3 bg-white/90 rounded-full shadow-md hover:bg-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft className="text-gray-800" />
                </motion.button>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="max-w-6xl mx-auto">
                            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                {post.category}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{post.title}</h1>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span className="text-sm">{post.location}</span>
                                </div>
                                <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                    <FaUsers className="mr-2" />
                                    <span className="text-sm">{post.volunteersNeeded} volunteers needed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Section */}
            <motion.div 
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2">
                        {/* Key Details */}
                        <motion.div 
                            className="mb-12"
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Opportunity Details</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <motion.div 
                                    className="bg-gray-50 p-5 rounded-xl"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center text-gray-500 mb-2">
                                        <FaCalendarAlt className="mr-3 text-[rgb(5,127,104)]" />
                                        <span className="text-sm font-medium">Date</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">
                                        {new Date(post.deadline).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-gray-50 p-5 rounded-xl"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center text-gray-500 mb-2">
                                        <FaClock className="mr-3 text-[rgb(5,127,104)]" />
                                        <span className="text-sm font-medium">Posted</span>
                                    </div>
                                    <p className="text-gray-800 font-medium">
                                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </motion.div>
                            </div>
                            
                            <motion.div 
                                className="prose max-w-none"
                                variants={fadeIn}
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">About This Opportunity</h3>
                                <p className="text-gray-600 whitespace-pre-line text-lg leading-relaxed">
                                    {post.description}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Call to Action */}
                        {user?.email!=post.organizerEmail && <motion.div 
                            className="mt-12"
                            variants={itemVariants}
                        >
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full px-8 py-4 bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)] text-white text-lg font-semibold rounded-lg transition-colors duration-300 transform hover:scale-[1.01]"
                                disabled={!user}
                            >
                                {user ? 'Join as Volunteer' : 'Please login to volunteer'}
                            </button>
                        </motion.div>}
                    </div>

                    {/* Right Column - Organizer Info */}
                    <div className="lg:col-span-1">
                        <motion.div 
                            className="sticky top-8"
                            variants={itemVariants}
                        >
                            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Organizer Information</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-2">Organizer Name</h4>
                                        <div className="flex items-center">
                                            <FaUser className="text-[rgb(5,127,104)] mr-3" />
                                            <span className="text-gray-800 font-medium">{post.organizerName}</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Email</h4>
                                        <div className="flex items-center">
                                            <FaEnvelope className="text-[rgb(5,127,104)] mr-3" />
                                            <a 
                                                href={`mailto:${post.organizerEmail}`} 
                                                className="text-gray-800 font-medium hover:text-[rgb(5,127,104)] transition-colors"
                                            >
                                                {post.organizerEmail}
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-2">Location</h4>
                                        <div className="flex items-start">
                                            <FaMapMarkerAlt className="text-[rgb(5,127,104)] mr-3 mt-1" />
                                            <span className="text-gray-800 font-medium">{post.location}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <button
                                        className="w-full px-6 py-3 bg-white border border-[rgb(5,127,104)] text-[rgb(5,127,104)] font-medium rounded-lg hover:bg-[rgb(5,127,104,0.1)] transition-colors"
                                        onClick={() => navigate('/volunteer-post')}
                                    >
                                        View All Opportunities
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PostDetails;