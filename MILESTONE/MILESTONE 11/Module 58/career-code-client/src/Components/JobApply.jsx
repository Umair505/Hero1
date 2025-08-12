import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2'
const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const resumeLink = form.resume.value;
        const coverLetterLink = form.coverLetter.value;
        
        const email = user?.email;
        const application = {
            jobId: id,
            applicant:email,
            resumeLink,
            coverLetterLink
        };
        axios.post('http://localhost:3000/applications', application)
        .then(res=>{
            console.log("Application submitted successfully", res.data);
            Swal.fire({
  title: "Thanks For Applying The Job!",
  text: "Your application has been submitted successfully!",
  icon: "success"
});
        })
        .catch(err=>{
            console.error("Error submitting application", err);
        })
        form.reset();
    };

    return (
        <div className="max-w-md mx-auto p-6  rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Apply for Job ID: {id}</h3>
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block  text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user?.email || ''}
                        readOnly
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                {/* Additional fields you might want to add */}
                <div className="mb-4">
                    <label className="block  text-sm font-bold mb-2" htmlFor="resume">
                        Resume Link
                    </label>
                    <input
                        type="url"
                        id="resume"
                        name="resume"
                        placeholder="Paste your resume link here"
                        pattern="https?://.+"
                        title="Please enter a valid URL starting with http:// or https://"
                        className="border border-gray-300 p-2 w-full rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block  text-sm font-bold mb-2" htmlFor="coverLetter">
                        Cover Letter
                    </label>
                    <input
                        id="coverLetter"
                        name="coverLetter"
                        type="url"
                        placeholder="Paste your cover letter link here"
                        pattern="https?://.+"
                        title="Please enter a valid URL starting with http:// or https://"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApply;