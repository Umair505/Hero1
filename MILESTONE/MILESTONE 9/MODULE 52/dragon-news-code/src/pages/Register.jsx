import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [nameError,setNameError] = useState("");
  const navigate = useNavigate();
  const {createUser,setUser,updateUser} = use(AuthContext)
  const handleRegister = (e)=>{
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const photo = form.photo.value
    const name = form.name.value;
    if(name.length < 5){
      setNameError("Name should be more than 5 character");
      return;
    }
    else{
      setNameError("");
    }
    const email = form.email.value;
    const password = form.password.value;
    // const photUrl = form.photoUrl.value;
    createUser(email,password)
    .then(result =>{
      const user = result.user;
      updateUser({displayName:name,photoURL:photo}).then(()=>{
        setUser({...user,displayName:name,photoURL:photo});
        navigate("/")
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setUser(user);
        console.log(errorCode,errorMessage);
      })
    })
    .catch((error) =>{
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-base-200">
      <div className="card bg-base-100 py-8 px-6 w-full max-w-md shadow-2xl text-base space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
            Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body space-y-4">
          <fieldset className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input input-md w-full"
                placeholder="Name"
                required
              />
            </div>
            { nameError && <p className="text-error text-xs">{nameError}</p>}
            <div>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-md w-full"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input input-md w-full"
                placeholder="Photo URL"
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-md w-full"
                placeholder="Password"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-neutral w-full">Register</button>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
