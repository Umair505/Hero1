import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaCheck, 
  FaTimes, 
  FaSpinner,
  FaArrowLeft,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Loading from '../components/Loading';

const MySwal = withReactContent(Swal);

const MyVolunteerRequests = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        const fetchRequests = async () => {
            if (!user?.email) return;
            
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/volunteer-requests/${user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    }
                );
                setRequests(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching requests:', err);
                setError('Failed to load your volunteer requests');
                setLoading(false);
            }
        };

        fetchRequests();
    }, [user]);
    const handleOpportunityView = (postId) => {
            axios.get(`${import.meta.env.VITE_API_URL}/volunteer-requests-by-post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            })
            .then(response => {
                if (response.data.success) {
                   
                    navigate(`/volunteer-need-post/${postId}`);
                } else {
                    throw new Error(response.data.message || 'Request not found');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                MySwal.fire({
                    title: 'Error!',
                    text: error.message || 'Failed to load volunteer post',
                    icon: 'error',
                    confirmButtonColor: 'rgb(5, 127, 104)'
                });
            });
        };

const handleWithdrawRequest = async (requestId) => {
    const result = await MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(5, 127, 104)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, withdraw it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(
                    `${import.meta.env.VITE_API_URL}/volunteer-requests/${requestId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    }
                );
                
                setRequests(requests.filter(request => request._id !== requestId));
                
                MySwal.fire(
                    'Withdrawn!',
                    'Your volunteer request has been withdrawn.',
                    'success'
                );
            } catch (err) {
                console.error('Error withdrawing request:', err);
                MySwal.fire(
                    'Error!',
                    'Failed to withdraw request. Please try again.',
                    'error'
                );
            }
        }
    };

    const filteredRequests = requests
        .filter(request => 
            request.postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.organizerName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(request => 
            statusFilter === 'all' || request.status === statusFilter
        );

    

    const getStatusBadge = (status) => {
        const statusClasses = {
            requested: 'bg-blue-100 text-blue-800',
            approved: 'bg-green-100 text-green-800',
            rejected: 'bg-red-100 text-red-800',
            completed: 'bg-purple-100 text-purple-800'
        };
        
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
                    <p className="text-gray-700 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-[rgb(5,127,104)] text-white rounded hover:bg-[rgb(4,107,87)]"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <FaArrowLeft className="text-gray-700" />
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">My Volunteer Requests</h1>
                </div>

                {/* Filters and Search */}
                <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by post title or organizer..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center">
                            <FaFilter className="text-gray-500 mr-2" />
                            <select
                                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="requested">Requested</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Requests List */}
                {filteredRequests.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">
                            {requests.length === 0 
                                ? "You haven't made any volunteer requests yet."
                                : "No requests match your filters."}
                        </h3>
                        <p className="text-gray-500 mb-4">
                            {requests.length === 0 
                                ? "Browse opportunities to find something that interests you!"
                                : "Try adjusting your search or filter criteria."}
                        </p>
                        <button
                            onClick={() => navigate('/volunteer-post')}
                            className="px-4 py-2 bg-[rgb(5,127,104)] text-white rounded-md hover:bg-[rgb(4,107,87)]"
                        >
                            Browse Opportunities
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {filteredRequests.map((request) => (
                            <motion.div
                                key={request._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                                {request.postTitle}
                                            </h3>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <FaUser className="mr-2 text-[rgb(5,127,104)]" />
                                                <span>Organizer: {request.organizerName}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:items-end">
                                            {getStatusBadge(request.status)}
                                            <div className="text-sm text-gray-500 mt-1">
                                                <FaCalendarAlt className="inline mr-1" />
                                                {new Date(request.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Your Message</h4>
                                        <p className="text-gray-700 whitespace-pre-line bg-gray-50 p-3 rounded">
                                            {request.suggestion || "No message provided"}
                                        </p>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        {request.status === 'requested' && (
                                            <button
                                                onClick={() => handleWithdrawRequest(request._id)}
                                                className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                                            >
                                                Withdraw Request
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleOpportunityView(request.postId)}
                                            className="px-4 py-2 bg-[rgb(5,127,104)] text-white rounded-md hover:bg-[rgb(4,107,87)] transition-colors"
                                        >
                                            View Opportunity
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyVolunteerRequests;