import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProblemStatements from "../components/ProblemStatements";
import Rules from "../components/Rules";
import Timer from '../components/Timer'
const Home = () => {
  return (
    <div className="bg-backgroundImg pb-4">
      <Navbar />
      <Banner />
      <Rules />
      <Timer/>
      <ProblemStatements />
    </div>
  );
};

export default Home;
