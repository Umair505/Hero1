import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaUser, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTimes } from 'react-icons/fa';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MySwal = withReactContent(Swal);

const VolunteerRequestModal = ({ post, onClose }) => {
    const { user } = use(AuthContext);
    const [suggestion, setSuggestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Create the volunteer request object
            const requestData = {
                postId: post._id,
                postTitle: post.title,
                volunteerName: user?.displayName, 
                volunteerEmail: user?.email, 
                suggestion,
                status: 'requested',
                organizerEmail: post.organizerEmail,
                organizerName: post.organizerName,
                createdAt: new Date()
            };

            // Make API call to create the request with authorization header
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/volunteer-requests/${user?.email}`, 
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                }
            );

            // Update the volunteers needed count with authorization header
            await axios.patch(
                `${import.meta.env.VITE_API_URL}/volunteer-need-post/${post._id}/decrement-volunteers`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                }
            );

            setIsLoading(false);
            
            // Show success notification
            MySwal.fire({
                title: <p className="text-2xl">Request Sent!</p>,
                html: <p className="text-lg">Your volunteer request has been submitted successfully.</p>,
                icon: 'success',
                confirmButtonColor: 'rgb(5, 127, 104)',
                confirmButtonText: 'OK',
                timer: 3000,
                background: '#ffffff',
                customClass: {
                    popup: 'rounded-xl shadow-2xl border border-gray-200'
                }
            }).then(() => {
                onClose();
            });

        } catch (error) {
            setIsLoading(false);
            console.error('Request error:', error);
            
            let errorMessage = 'Failed to submit request. Please try again.';
            if (error.response) {
                if (error.response.data?.error) {
                    errorMessage = error.response.data.error;
                } else if (error.response.data?.message) {
                    errorMessage = error.response.data.message;
                }
            }

            MySwal.fire({
                title: <p className="text-2xl">Error!</p>,
                html: <p className="text-lg">{errorMessage}</p>,
                icon: 'error',
                confirmButtonColor: 'rgb(5, 127, 104)',
                confirmButtonText: 'OK',
                background: '#ffffff',
                customClass: {
                    popup: 'rounded-xl shadow-2xl border border-gray-200'
                }
            });
        }
    };

    return (
        <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div 
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <FaTimes className="text-gray-500" />
                </button>

                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Request Form</h2>
                    
                    {/* Post Information */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Opportunity Details</h3>
                        
                        {/* Thumbnail */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
                            <div className="h-40 w-full rounded-md overflow-hidden bg-gray-100">
                                {post.thumbnail ? (
                                    <img 
                                        src={post.thumbnail} 
                                        alt={post.title} 
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                                        <span>No Image</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Post Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                                    {post.title}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                                    {post.category}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200 flex items-center">
                                    <FaMapMarkerAlt className="text-[rgb(5,127,104)] mr-2" />
                                    {post.location}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Volunteers Needed</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200 flex items-center">
                                    <FaUsers className="text-[rgb(5,127,104)] mr-2" />
                                    {post.volunteersNeeded}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200 flex items-center">
                                    <FaCalendarAlt className="text-[rgb(5,127,104)] mr-2" />
                                    {new Date(post.deadline).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <div className="p-2 bg-gray-50 rounded border border-gray-200 whitespace-pre-line">
                                {post.description}
                            </div>
                        </div>
                    </div>
                    
                    {/* Volunteer Information */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200 flex items-center">
                                    <FaUser className="text-[rgb(5,127,104)] mr-2" />
                                    {user?.displayName} 
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                <div className="p-2 bg-gray-50 rounded border border-gray-200 flex items-center">
                                    <FaEnvelope className="text-[rgb(5,127,104)] mr-2" />
                                    {user?.email} 
                                </div>
                            </div>
                        </div>
                        
                        {/* Suggestion */}
                        <div className="mb-4">
                            <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Suggestion <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="suggestion"
                                rows={4}
                                value={suggestion}
                                onChange={(e) => setSuggestion(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                                placeholder="Tell the organizer why you'd be a good fit..."
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isLoading || !suggestion}
                            className={`px-6 py-2 bg-[rgb(5,127,104)] text-white rounded-md hover:bg-[rgb(4,107,87)] ${isLoading ? 'opacity-75' : ''} ${!suggestion ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default VolunteerRequestModal;