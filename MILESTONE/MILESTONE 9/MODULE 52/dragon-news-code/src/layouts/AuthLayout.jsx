import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen p-0">
      <header className="w-11/12 mx-auto p-4">
        <Navbar></Navbar>
        
      </header>
      <main className="w-11/12 mx-auto">
       <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
