import React from "react";

const Rules = () => {
  const rules = [
    "Participation is allowed in teams of two",
    "The problem statement will be revealed on spot",
    "This is a timed solution, the team with the least time wins",
    "The solution has to be written on google docs, use of online compilers is not allowed",
    "One member will code the solution and the other will debug the code",
    "Once submitted, teams cannot re-submit their solution.",
  ];
  const renderRules = rules.map((rule) => (
    <div className="bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg h-[15vh] w-[20vw] p-10 text-2xl flex items-center justify-center rounded-md">
      {rule}
    </div>
  ));
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg text-5xl p-4 rounded-md">
        Rules of the game
      </div>
      <div className="grid grid-cols-3 gap-5 mx-12 p-10">{renderRules}</div>
    </div>
  );
};

export default Rules;
