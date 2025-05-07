import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-base-200">
      <div className="card bg-base-100 py-8 px-6 w-full max-w-md shadow-2xl text-base space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
            Register Your Account
        </h2>
        <div className="card-body space-y-4">
          <fieldset className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-md w-full"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input input-md w-full"
                placeholder="Photo URL"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input input-md w-full"
                placeholder="Password"
              />
            </div>
            
            <button className="btn btn-neutral w-full">Register</button>
            <p className="text-sm pt-2 text-center">
              Already have an account?
              <Link
                className="text-secondary font-semibold ml-1"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
