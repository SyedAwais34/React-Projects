



const RollDice = ({ currentDice, roleDice, setScore, showRules, setShowRules }) => {
  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen container mx-auto">
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="Dice image" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-medium mt-3">Click on Dice to roll</h1>
        <button onClick={resetScore} className="w-[210px] h-[44px] cursor-pointer rounded-sm text-[16px] mt-4 font-medium bg-white text-black border-1 border-gray-400 hover:bg-black hover:text-white hover:border-none hover:transition-all ease-in">
          Reset Score
        </button>
        <button onClick={() => setShowRules((prev) => !prev)} className="w-[210px] h-[44px] cursor-pointer rounded-sm text-[16px] font-medium bg-black text-white border-transparent hover:bg-white hover:text-black hover:border-1 hover:border-gray-400 hover:transition-all ease-in  ">
          {
            showRules ? "Hide " : "Show "
          }
          Rules
        </button>
      </div>
    </div>
  );
};

export default RollDice;
