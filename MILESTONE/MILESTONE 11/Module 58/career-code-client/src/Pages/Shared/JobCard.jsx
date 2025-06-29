import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaTags } from "react-icons/fa";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, location, salaryRange, jobType, category, requirements, description, company, company_logo } = job;
    
    return (
        <div className="card w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Company Header */}
            <div className="card-header flex items-center gap-4 p-4 bg-gray-50 border-b">
                <figure className="w-16 h-16 flex-shrink-0">
                    <img
                        src={company_logo || 'https://via.placeholder.com/64'}
                        alt={company}
                        className="w-full h-full object-contain rounded-md"
                    />
                </figure>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-gray-500" />
                        {location}
                    </p>
                </div>
            </div>
            
            {/* Job Details */}
            <div className="card-body p-6">
                <div className="flex justify-between items-start mb-3">
                    <h2 className="card-title text-xl font-bold text-gray-800 mb-2">{title}</h2>
                    <div className="flex gap-2">
                        <span className="badge bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {jobType}
                        </span>
                        <span className="badge bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                            {category}
                        </span>
                    </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
                
                {/* Salary Info */}
                <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <FaMoneyBillWave className="text-green-500" />
                    <span className="text-sm font-medium">
                        {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
                    </span>
                </div>
                
                {/* Requirements */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <FaTags className="text-blue-500" />
                        <span className="text-sm font-semibold">Requirements:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {requirements.slice(0, 4).map((req, index) => (
                            <span key={index} className="badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                                {req}
                            </span>
                        ))}
                        {requirements.length > 4 && (
                            <span className="badge bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                                +{requirements.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
                
                {/* Apply Button */}
                <div className="card-actions">
                    <Link to={`/jobs/${_id}`} className="w-full">
                        <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;