import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import loginAnimation from "../../assets/Lotties/login.json";
import Lottie from 'lottie-react';
const SignIn = () => {
     const {signIn} = use(AuthContext);  
    const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      //Sign in
      signIn(email,password)
      .then(res=>{
        console.log("User signed in successfully", res.user);
      })
      .catch(err=>{
        console.error("Error signing in", err);
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "350px" }}
            animationData={loginAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignIn} className="form-control">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                    name="password"
                  placeholder="Password"
                />
               
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;