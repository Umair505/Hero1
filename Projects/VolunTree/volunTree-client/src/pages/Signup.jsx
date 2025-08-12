import React, { useState, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Lottie from 'lottie-react';
import regAnimation from "../assets/RegAnima.json";
import regAnimation2 from "../assets/RegAnima2.json";
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
  const { createUser } = use(AuthContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password');
  const [photoPreview, setPhotoPreview] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handlePhotoChange = (e) => {
    const url = e.target.value;
    if (url) {
      setPhotoPreview(url);
    } else {
      setPhotoPreview(null);
    }
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      await createUser(data.email, data.password, data.name, data.photoURL);
      toast.success("Account created successfully!");
      navigate(from); // or navigate("/login") if that's preferred
    } catch (error) {
      toast.error(error.message || 'Registration failed');
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(5,127,104,0.05)] to-white p-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-2xl shadow-lg overflow-hidden bg-white h-[90vh] max-h-[800px]">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex flex-1 bg-[rgb(5,127,104)] p-8 items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            {/* Subheading */}
            <p className="text-lg mb-4 italic max-w-md">
              "Where every act of kindness grows a better tomorrow."
            </p>

            {/* Lottie Animation */}
            <Lottie
              animationData={regAnimation2}
              loop={true}
              className="w-3/4 h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 p-6 md:p-8 lg:p-10 overflow-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Photo URL Field with Preview */}
            <div>
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">
                Profile Photo URL
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden border-2 border-gray-200">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                      onError={() => setPhotoPreview(null)}
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    id="photoURL"
                    name="photoURL"
                    type="url"
                    {...register('photoURL', {
                      pattern: {
                        value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
                        message: 'Please enter a valid image URL'
                      }
                    })}
                    onChange={handlePhotoChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all"
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>
              </div>
              {errors.photoURL && <p className="mt-1 text-sm text-red-600">{errors.photoURL.message}</p>}
            </div>

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all"
                  placeholder="Moinul Islam"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all"
                  placeholder="you@example.com"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message: 'Password must contain uppercase, lowercase, and number'
                    }
                  })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  {...register('confirmPassword', { 
                    required: 'Please confirm your password',
                    validate: value => 
                      value === password || 'Passwords do not match'
                  })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)] text-white font-medium rounded-lg shadow-md transition-all duration-200 mt-4"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-[rgb(5,127,104)] hover:text-[rgb(4,107,87)] transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;