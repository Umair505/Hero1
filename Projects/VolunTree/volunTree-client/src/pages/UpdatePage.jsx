import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaArrowLeft, FaSave, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MySwal = withReactContent(Swal);

const UpdatePage = () => {
    const {user} = use(AuthContext);
    const { id } = useParams();
    const { data } = useLoaderData();
    const post = data?.data || {};
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    // Initialize form data with the post data
    const [formData, setFormData] = useState({
        title: post.title || '',
        description: post.description || '',
        category: post.category || '',
        location: post.location || '',
        volunteersNeeded: post.volunteersNeeded || '',
        deadline: post.deadline ? new Date(post.deadline) : new Date(),
        thumbnail: post.thumbnail || '',
        organizerName: post.organizerName || '',
        organizerEmail: post.organizerEmail || ''
    });

    const categories = [
        'Healthcare',
        'Education',
        'Social Service',
        'Animal Welfare',
        'Environment',
        'Disaster Relief'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            deadline: date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Prepare the data for submission
            const submissionData = {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                location: formData.location,
                volunteersNeeded: parseInt(formData.volunteersNeeded),
                deadline: formData.deadline.toISOString(),
                thumbnail: formData.thumbnail
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL}/volunteer-need-post/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to update post');
            }

            // Show success notification
            MySwal.fire({
                title: <p className="text-2xl">Success!</p>,
                html: <p className="text-lg">Post updated successfully!</p>,
                icon: 'success',
                confirmButtonColor: 'rgb(5, 127, 104)'
            }).then(() => {
                navigate(`/my-posts/${user?.email}`);
            });

        } catch (error) {
            console.error('Update error:', error);
            MySwal.fire({
                title: <p className="text-2xl">Error!</p>,
                html: <p className="text-lg">{error.message}</p>,
                icon: 'error',
                confirmButtonColor: 'rgb(5, 127, 104)'
            });
        } finally {
            setIsLoading(false);
        }
    };

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

    return (
        <motion.div 
            className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-3xl mx-auto">
                {/* Header with back button */}
                <motion.div className="flex items-center mb-8" variants={itemVariants}>
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-[rgb(5,127,104)] hover:text-[rgb(4,107,87)] mr-4"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back
                    </button>
                    <motion.h1 
                        className="text-3xl font-bold text-gray-900"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        Update Volunteer Post
                    </motion.h1>
                </motion.div>

                {/* Form */}
                <motion.form 
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8"
                    variants={containerVariants}
                >
                    {/* Thumbnail URL */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Thumbnail Image URL <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="h-32 w-32 rounded-md bg-gray-100 overflow-hidden flex-shrink-0">
                                {formData.thumbnail ? (
                                    <img
                                        src={formData.thumbnail}
                                        alt="Preview"
                                        className="h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D1D5DB'%3E%3Cpath d='M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM5 5h14v10.586l-4.293-4.293a1 1 0 00-1.414 0L8 17H5V5zm4.5 3A1.5 1.5 0 118 6.5 1.5 1.5 0 019.5 8z' /%3E%3C/svg%3E";
                                        }}
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                                        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM5 5h14v10.586l-4.293-4.293a1 1 0 00-1.414 0L8 17H5V5zm4.5 3A1.5 1.5 0 118 6.5 1.5 1.5 0 019.5 8z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <input
                                type="url"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                                required
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div className="mb-6" variants={itemVariants}>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Post Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                            placeholder="e.g. Community Cleanup Volunteers Needed"
                            required
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.div className="mb-6" variants={itemVariants}>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            rows={5}
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                            placeholder="Describe the volunteer opportunity in detail..."
                            required
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Category */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </motion.div>

                        {/* Location */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                Location
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                                    placeholder="e.g. Central Park, New York"
                                    required
                                />
                            </div>
                        </motion.div>

                        {/* Volunteers Needed */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="volunteersNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                                Volunteers Needed
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUsers className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    name="volunteersNeeded"
                                    id="volunteersNeeded"
                                    min="1"
                                    value={formData.volunteersNeeded}
                                    onChange={handleChange}
                                    className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                                    placeholder="e.g. 10"
                                    required
                                />
                            </div>
                        </motion.div>

                        {/* Deadline */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                                Deadline
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                                </div>
                                <DatePicker
                                    selected={formData.deadline}
                                    onChange={handleDateChange}
                                    minDate={new Date()}
                                    className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                                    required
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Organizer Info (read-only) */}
                    <motion.div 
                        className="bg-gray-50 rounded-xl p-4 mb-8"
                        variants={itemVariants}
                    >
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Organizer Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500">Name</label>
                                <div className="mt-1 text-sm text-gray-900 p-2 bg-white rounded border border-gray-200">
                                    {formData.organizerName}
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500">Email</label>
                                <div className="mt-1 text-sm text-gray-900 p-2 bg-white rounded border border-gray-200">
                                    {formData.organizerEmail}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div 
                        className="flex justify-end"
                        variants={itemVariants}
                    >
                        <motion.button
                            type="submit"
                            className={`flex items-center px-6 py-3 bg-[rgb(5,127,104)] text-white rounded-lg font-medium hover:bg-[rgb(4,107,87)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(5,127,104)] transition-colors ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                            whileHover={!isLoading ? { scale: 1.02 } : {}}
                            whileTap={!isLoading ? { scale: 0.98 } : {}}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </>
                            ) : (
                                <>
                                    <FaSave className="mr-2" />
                                    Update Post
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default UpdatePage;