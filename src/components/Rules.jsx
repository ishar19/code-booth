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
    <div className="w-fit p-4 sm:p-4 md:p-8 lg:p-10 text-xl sm:text-xl md:text-2xl lg:text-3xl rounded-2xl bg-glass">
      {rule}
    </div>
  ));
  return (
    <div className="mt-20 flex flex-col items-center font-DMSans">
      <div className="bg-glass text-3xl sm:text-3xl md:text-3xl lg:text-5xl py-4 px-7 rounded-md w-[80vw] md:w-[60vw] lg:w-[60vw] text-center">
        Rules of the game
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-12 p-10">{renderRules}</div>
    </div>
  );
};

export default Rules;
