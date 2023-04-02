import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="sm:flex-col md:flex lg:flex-row text-xl bg-glass sticky top-0 z-20 items-center font-DMSans">
      <img src={logo} alt="logo" className="" />
      <div className="flex justify-evenly mx-auto text-lg sm:text-lg md:text-2xl lg:text-2xl min-w-[40vw]">
        <Link to="/">Home</Link>
        <Link to="/submit">Submissions</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
