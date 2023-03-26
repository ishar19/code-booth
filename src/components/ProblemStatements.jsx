import React from "react";
import web from "../assets/Web.png";
import dsa from "../assets/DSA.png";

const ProblemStatements = () => {
  const problems = [
    {
      name: "DSA",
      img: dsa,
    },
    {
      name: "Web",
      img: web,
    },
  ];
  const renderProblems = problems.map((problem) => (
    <div className="bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg flex w-[30vw] gap-5 py-10 flex-col justify-center items-center">
      <img src={problem.img} />
      <h2 className="text-3xl">{problem.name}</h2>
    </div>
  ));
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg text-5xl py-4 px-7 rounded-md">
        Problem statements
      </div>
      <div className="flex gap-5 mt-7">{renderProblems}</div>
    </div>
  );
};

export default ProblemStatements;
