import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import loginAnimation from "../assets/login.json";
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        toast.success('Logged in successfully!');
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message || 'Login failed');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Google sign-in successful');
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message || 'Google sign-in failed');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(5,127,104,0.05)] to-gray-50">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side - Lottie Animation */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="max-w-md">
            <Lottie
              animationData={loginAnimation}
              loop={true}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-600 max-w-md">
              Sign in to access your personalized dashboard and continue your journey with us.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Sign in to your account</h2>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all duration-200"
                      placeholder="you@example.com"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(5,127,104)] focus:border-[rgb(5,127,104)] transition-all duration-200"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)] text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)] focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="my-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign-In */}
              <div>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(5,127,104)] transition-all"
                >
                  <FcGoogle className="h-5 w-5 mr-2" />
                  Sign in with Google
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-[rgb(5,127,104)] hover:text-[rgb(4,107,87)] transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
