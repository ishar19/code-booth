import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Rules from "../components/Rules";
const Home = () => {
  return (
    <div className="bg-backgroundImg ">
      <Navbar />
      <Banner />
      <Rules />
    </div>
  );
};

export default Home;
