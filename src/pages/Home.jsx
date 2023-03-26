import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProblemStatements from "../components/ProblemStatements";
import Rules from "../components/Rules";
const Home = () => {
  return (
    <div className="bg-backgroundImg pb-4">
      <Navbar />
      <Banner />
      <Rules />
      <ProblemStatements />
    </div>
  );
};

export default Home;
