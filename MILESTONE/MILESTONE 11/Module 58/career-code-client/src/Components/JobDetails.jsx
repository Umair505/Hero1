import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { title,_id, location, salaryRange, jobType, category, requirements, description, company, company_logo } = useLoaderData();
     
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/4">
                    {company_logo && (
                        <img 
                            src={company_logo} 
                            alt={`${company} logo`} 
                            className="w-full h-auto max-h-40 object-contain border rounded-lg p-2 bg-gray-50"
                        />
                    )}
                </div>
                <div className="md:w-3/4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
                    <p className="text-xl font-semibold text-gray-600 mb-4">{company}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {location}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {jobType}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {category}
                        </span>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <p className="font-medium text-gray-800">
                            Salary: {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Job Description</h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {requirements.map((req, index) => (
                        <li key={index} className="text-gray-700">{req}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">About {company}</h3>
                <p className="text-gray-600">More information about the company would go here.</p>
            </div>
           <Link to={`/apply/${_id}`} >
            <button className="btn btn-primary  bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                            Apply Now
            </button>
            </Link>
        </div>
    );
};

export default JobDetails;