import React from "react";
import hero from "../assets/Hero.png";
const Banner = () => {
  return (
    <div className="flex flex-col mt-5 justify-center items-center font-DMSans">
      {/* <img src={hero} className="h-[30vh] w-[30vw] object-contain" /> */}
        <div className="w-[80vw] md:w-[60vw] lg:w-[60vw]  flex flex-col items-center mt-5 bg-glass rounded-2xl p-4">
        <p className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl mb-2">Coding Booth</p>
        <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-center">
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
