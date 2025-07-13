import { useState } from "react";
import RollDice from "./RollDice";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);

    setError = { setError };
  };

  return (
    <main>
      <div className="flex justify-around items-center h-[150px] pt-[70px]">
        <div className="max-w-[200px] text-center">
          <h1 className="text-[100px] font-semibold leading-[80px]">{score}</h1>
          <p className="text-[24px] font-medium">Total Score</p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="text-red-600 font-medium">{error}</p>
          <div className="flex">
            {arrNumber.map((value, i) => (
              <div
                className={`h-[72px] w-[72px] mr-4 border grid place-items-center text-[24px] font-bold cursor-pointer ${
                  value === selectedNumber
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                key={i}
                onClick={() => {
                  setSelectedNumber(value);
                  setError("");
                }}
              >
                {value}
              </div>
            ))}
          </div>
          <p className="font-bold text-[20px]">Select Number</p>
        </div>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} setScore={setScore} showRules={showRules} setShowRules={setShowRules} />
      {showRules && <ShowRules />}
    </main>
  );
};

export default GamePlay;
