import React from "react";
import hero from "../assets/Hero.png";
const Banner = () => {
  return (
    <div className="flex flex-col mt-5 justify-center items-center">
      <img src={hero} className="h-[30vh] w-[30vw]" />
      <div className="bg-white bg-opacity-30 w-[60vw] drop-shadow-lg backdrop-blur-lg flex flex-col items-center p-10 mt-5 rounded-md">
        <h1 className="text-7xl">Coding Booth</h1>
        <div className="text-2xl">
          A live coding and debugging event. Participate in pairs, choose a
          problem and code and debug a solution. Coding and debugging of your
          solution will be timed and a leaderboard will be maintained. The team
          which solves their problem in the least time wins!
        </div>
      </div>
    </div>
  );
};

export default Banner;
