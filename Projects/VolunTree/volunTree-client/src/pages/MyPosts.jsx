import { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaClock, FaUsers, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const MyPosts = () => {
    const loadedData = useLoaderData();
    const {user} = use(AuthContext);
    const [posts, setPosts] = useState(loadedData?.data || []);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/my-volunteer-posts/${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error("Error fetching my posts:", error);
        });
    }, [user]);

    // Filter posts based on search term
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#90CE48',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/volunteer-need-post/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete post');
                }

                setPosts(posts.filter(post => post._id !== id));
                Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
            } catch (err) {
                Swal.fire('Error!', err.message, 'error');
            }
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

    const cardHover = {
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div 
            className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <motion.h1 
                        className="text-4xl font-bold text-gray-900 mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        My Volunteer Posts
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-gray-600 mb-6"
                        variants={itemVariants}
                    >
                        Manage all your volunteer opportunities in one place
                    </motion.p>
                    <div className="flex justify-center gap-4">
                        <motion.button
                            className="flex items-center justify-center px-4 py-2 bg-[rgb(5,127,104)] text-white rounded-lg font-medium hover:bg-[rgb(4,107,87)] transition-colors"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/create-post')}
                        >
                            <FaPlus className="mr-2" />
                            Create New Post
                        </motion.button>
                        <motion.button
                            className="flex items-center justify-center px-4 py-2 bg-white border border-[rgb(5,127,104)] text-[rgb(5,127,104)] rounded-lg font-medium hover:bg-[rgb(5,127,104,0.1)] transition-colors"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/volunteer-requests')}
                        >
                            <FaHandsHelping className="mr-2" />
                            My Volunteer Requests
                        </motion.button>
                    </div>
                </motion.div>

                {/* Search */}
                <motion.div 
                    className="flex justify-center mb-8"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="relative w-full max-w-md"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search your posts..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] sm:text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>
                </motion.div>

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <motion.div 
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                    >
                        {filteredPosts.map((post) => (
                            <motion.div
                                key={post._id}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                                variants={itemVariants}
                                whileHover="hover"
                                variants={cardHover}
                            >
                                {/* Thumbnail */}
                                <div className="h-48 overflow-hidden" onClick={() => navigate(`/volunteer-need-post/${post._id}`)}>
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category */}
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-[rgb(5,127,104)] bg-[rgb(5,127,104,0.1)] rounded-full mb-2">
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Meta Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-600">
                                            <FaMapMarkerAlt className="mr-2 text-[rgb(5,127,104)]" />
                                            <span className="text-sm">{post.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <FaUsers className="mr-2 text-[rgb(5,127,104)]" />
                                            <span className="text-sm">{post.volunteersNeeded} volunteers needed</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <FaClock className="mr-2 text-[rgb(5,127,104)]" />
                                            <span className="text-sm">
                                                Deadline: {new Date(post.deadline).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex justify-between pt-4 border-t border-gray-100">
                                        <button
                                            className="flex items-center text-sm font-medium text-[rgb(5,127,104)] hover:text-[rgb(4,107,87)]"
                                            onClick={() => navigate(`/edit-post/${post._id}`)}
                                        >
                                            <FaEdit className="mr-1" />
                                            Edit
                                        </button>
                                        <button
                                            className="flex items-center text-sm font-medium text-red-600 hover:text-red-800"
                                            onClick={() => handleDelete(post._id)}
                                        >
                                            <FaTrash className="mr-1" />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div 
                        className="text-center py-16 bg-white rounded-xl shadow-sm"
                        variants={itemVariants}
                    >
                        <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                            <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {searchTerm ? 'No matching posts found' : 'You have no posts yet'}
                        </h3>
                        <p className="text-gray-500 mb-4">
                            {searchTerm ? 'Try a different search term' : 'Create your first volunteer post'}
                        </p>
                        <button
                            className="px-4 py-2 bg-[rgb(5,127,104)] text-white rounded-lg font-medium hover:bg-[rgb(4,107,87)] transition-colors"
                            onClick={() => navigate('/create-post')}
                        >
                            Create New Post
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default MyPosts;