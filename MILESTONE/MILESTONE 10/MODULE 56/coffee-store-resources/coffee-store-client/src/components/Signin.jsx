import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";

const Signin = () => {
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log("User signed in successfully:", result.user);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users",{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signInInfo),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("User sign-in info updated:", data);
        //   if (data.modifiedCount > 0) {
        //     // Optionally, redirect the user or show a success message
        //     alert("Sign in successful!");
        //     // window.location.href = '/';
        //   }
        })
      })

      .catch((error) => {
        console.error("Error signing in user:", error);
        // Handle error, e.g., show an alert or message
        alert("Failed to sign in. Please check your email and password.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md font-sans"
      >
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#151717] font-semibold">Email</label>
            <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="ml-2 w-full h-full border-none outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-[#151717] font-semibold">Password</label>
            <div className="flex items-center h-[50px] px-3 border border-[#ecedec] rounded-lg focus-within:border-[#2d79f3] transition">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="ml-2 w-full h-full border-none outline-none"
              />
            </div>
          </div>

          {/* Other Elements */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <label className="text-black text-xs md:text-sm font-normal">
                Remember me
              </label>
            </div>
            <Link
              to="/"
              className="text-xs md:text-sm font-medium cursor-pointer hover:underline text-[#9b1fe8]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white text-[15px] font-medium rounded-lg h-[50px] w-full transition"
          >
            Sign In
          </button>

          <Link to="/signup" className="text-center text-black text-sm">
            Don't have an account?{" "}
            <span className="text-[#9b1fe8] font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </Link>

          <p className="text-center text-black text-sm mt-2">Or With</p>

          <div className="flex gap-3">
            <button
              type="button"
              className="w-full h-[50px] rounded-lg flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white hover:border-[#2d79f3] transition"
            >
              {/* Google Icon */}
              <svg
                xmlSpace="preserve"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"
                  fill="#FBBB00"
                />
                <path
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887z"
                  fill="#518EF8"
                />
                <path
                  d="M416.253,455.624C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                  fill="#28B446"
                />
                <path
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"
                  fill="#F14336"
                />
              </svg>
              Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
