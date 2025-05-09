import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const [error,setError] = useState("");
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      navigate(`${location.state? location.state :"/"}`);
    })
    .catch((error) =>{
      const errorCode = error.code;
      // const errorMessage = error.message;
      setError(errorCode);
    });

  }
  return (
  <div className="flex justify-center items-center min-h-screen px-4 bg-base-200">
  <div className="card bg-base-100 py-8 px-6 w-full max-w-md shadow-2xl text-base space-y-4">
    <h2 className="text-2xl font-semibold text-center mb-4">Login to Your Account</h2>
    <form onSubmit={handleLogin} className="card-body space-y-4">
      <fieldset className="space-y-4">
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
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input input-md w-full"
            placeholder="Password"
            required
          />
        </div>
        <div className="text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button type="submit" className="btn btn-neutral w-full">Login</button>
        <p className="text-sm pt-2 text-center">
          Don’t have an account?
          <Link className="text-secondary font-semibold ml-1" to="/auth/register">
            Register
          </Link>
        </p>
      </fieldset>
    </form>
  </div>
</div>

  );
};

export default Login;
