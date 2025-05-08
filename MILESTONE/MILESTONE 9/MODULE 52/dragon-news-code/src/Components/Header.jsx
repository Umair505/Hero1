import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[250px] md:w-[350px] mt-10" src={logo} alt="" />
      <p className="text-accent text-sm md:text-lg">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent text-xs md:text-lg">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
