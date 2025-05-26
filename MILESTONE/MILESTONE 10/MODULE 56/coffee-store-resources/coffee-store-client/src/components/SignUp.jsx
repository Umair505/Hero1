import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = use(AuthContext);
    
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email,password,...userProfile} = Object.fromEntries(formData.entries());
        console.log('User Profile:', userProfile);
        createUser(email,password)
        .then(result =>{
            console.log('User created successfully:', result.user);

            // Here you can also save the user profile to your database
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    email,
                    ...userProfile,
                    creationTime: result.user?.metadata.creationTime,
                    lastSignInTime: result.user?.metadata.lastSignInTime,
                })
            })
            .then(res => res.json())
            .then(data =>{
                console.log('User profile saved:', data);
                // Optionally, you can redirect the user or show a success message
                if(data.insertedId){
                   Swal.fire({
                        title: 'Success!',
                        text: 'User created successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        // Redirect to the sign-in page or home page
                        // window.location.href = '/signin';
                    });
                }
            })

        })
        .catch(error => {
            console.error('Error creating user:', error);
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
      <form onSubmit={handleSignUp}  className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-[#9b1fe8] flex items-center mb-2 relative pl-8">
          Register
        </h2>
        <p className="text-sm text-gray-600 mb-6">Signup now and get full access to our app.</p>

        {/* Name */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="ml-2 w-full h-full border-none outline-none"
            />
          </div>
        </div>
        {/* Address */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
            <input
              type="text"
              name="address"
              placeholder="Enter your Address"
              className="ml-2 w-full h-full border-none outline-none"
            />
          </div>
        </div>
        {/* Phone */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              className="ml-2 w-full h-full border-none outline-none"
            />
          </div>
        </div>
        {/* Photo */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="ml-2 w-full h-full border-none outline-none"
            />
          </div>
        </div>

      

        {/* Email */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg">
            <input
              type="email"
                name="email"
              placeholder="Enter your Email"
              className="ml-2 w-full h-full border-none outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg">
            <input
              type="password"
                name="password"
              placeholder="Password"
              className="ml-2 w-full h-full border-none outline-none"
             
            />
          </div>
        </div>

        {/* Confirm Password */}
        {/* <div className="flex flex-col my-2">
          <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg">
            <input
              type="password"
              placeholder="Confirm Password"
              className="ml-2 w-full h-full border-none outline-none"
              
            />
          </div>
        </div> */}

        <button type="submit" className="cursor-pointer bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white text-[15px] font-medium rounded-lg h-[50px] w-full transition">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/signin" className="text-[#9b1fe8] font-semibold hover:underline">Sign in</Link>
        </p>
      </form>
    </div>
    );
};
export default SignUp;