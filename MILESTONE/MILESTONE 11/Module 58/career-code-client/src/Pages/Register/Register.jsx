import Lottie from "lottie-react";
import React, { use } from "react";
import animationData from "../../assets/Lotties/Animation - 1750481982367.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
const Register = () => {
  const {createUser,setLoading} = use(AuthContext);  
  const handleRegister =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
        }).catch((error)=>{
            console.error(error);
        });

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "350px" }}
            animationData={animationData}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="form-control">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
