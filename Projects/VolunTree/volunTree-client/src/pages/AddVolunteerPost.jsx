import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const AddVolunteerPost = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);

const [formData, setFormData] = useState({
  thumbnail: '',
  title: '',
  description: '',
  category: '',
  location: '',
  volunteersNeeded: '',
  deadline: new Date(),
  organizerName: '',
  organizerEmail: ''
});

useEffect(() => {
  if (user) {
    setFormData(prev => ({
      ...prev,
      organizerName: user.displayName || '',
      organizerEmail: user.email || ''
    }));
  }
}, [user]);
  console.log(formData.organizerEmail,formData.organizerName)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      volunteersNeeded: parseInt(formData.volunteersNeeded),
      deadline: formData.deadline.toISOString()
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/volunteer-need`, postData);
      
      Swal.fire({
        title: 'Success!',
        text: 'Post created successfully',
        icon: 'success'
      });
      
      navigate('/');
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to create post',
        icon: 'error'
      });
    }
  };

  const categories = [
    'Healthcare',
    'Education',
    'Social Service',
    'Animal Welfare',
    'Environment',
    'Disaster Relief'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Volunteer Opportunity</h2>
          <p className="mt-2 text-lg text-gray-600">
            Fill out the form below to post your volunteer need
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Thumbnail URL */}
            <div>
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
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Post Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                placeholder="e.g. Community Cleanup Volunteers Needed"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                placeholder="Describe the opportunity..."
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                placeholder="e.g. Central Park, NY"
                required
              />
            </div>

            {/* Volunteers Needed */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Volunteers Needed</label>
              <input
                type="number"
                name="volunteersNeeded"
                min="1"
                value={formData.volunteersNeeded}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                required
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Deadline</label>
              <DatePicker
                selected={formData.deadline}
                onChange={(date) => setFormData({ ...formData, deadline: date })}
                minDate={new Date()}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                required
              />
            </div>

            {/* Organizer Info (Read-only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
                <input
                  type="text"
                  name="organizerName"
                  value={formData.organizerName}
                  readOnly
                  className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Organizer Email</label>
                <input
                  type="email"
                  name="organizerEmail"
                  value={formData.organizerEmail}
                  readOnly
                  className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)] text-white rounded-md font-medium shadow-sm transition"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteerPost;