import React from "react";
import web from "../assets/Web.png";
import dsa from "../assets/DSA.png";

const ProblemStatements = () => {
  const problems = [
    {
      name: "DSA",
      img: dsa,
      link:"https://www.notion.so/ishar19/DSA-f562a4928239413d9cb72996c699603b"
    },
    {
      name: "Web",
      img: web,
      link:"https://www.notion.so/ishar19/DEV-9470fb4b597143849539f24a1ebffd9b"
    },
  ];
  const renderProblems = problems.map((problem) => (
    <div onClick={()=>window.open(problem.link)}  className="bg-glass flex w-[80vw] md:w-[40vw] lg:w-[40vw] gap-5 p-10 flex-col justify-center items-center">
      <img src={problem.img} />
      <h2 className="text-3xl">{problem.name}</h2>
    </div>
  ));
  return (
    <div className="mt-20 flex flex-col items-center font-DMSans">
      <div className="bg-glass text-3xl sm:text-3xl md:text-3xl lg:text-5xl py-4 px-7 rounded-md w-[80vw] md:w-[60vw] lg:w-[60vw] text-center">
        Problem statements
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">{renderProblems}</div>
    </div>
  );
};

export default ProblemStatements;
