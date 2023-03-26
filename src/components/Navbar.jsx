import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center text-2xl justify-around  border-b-2 border-gray-500">
      <img src={logo} alt="logo" />
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/submissions">Submissions</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
