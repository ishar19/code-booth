import React from "react";
import Banner from "../components/Banner";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="bg-backgroundImg bg-fixed h-screen">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
