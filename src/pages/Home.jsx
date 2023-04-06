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
      <div className="bg-glass my-3 p-4 text-xl sm:text-xl md:text-2xl lg:text-3xl mx-auto text-center">
        Made with ❣ by Ishar, Bhavya and Diksha
       </div>
    </div>
  );
};

export default Home;
