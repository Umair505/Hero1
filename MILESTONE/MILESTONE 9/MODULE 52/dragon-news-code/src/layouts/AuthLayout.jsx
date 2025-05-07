import React from "react";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen p-0">
      <header className="w-11/12 mx-auto p-3">
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default AuthLayout;
