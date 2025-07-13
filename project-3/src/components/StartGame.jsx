const StartGame = ({ toggle }) => {
  return (
    <div className="flex items-center justify-center max-w-[1180px] h-screen mx-auto">
      <div className="w-[650px] h-[522px]">
        <img src="/images/dices 1.png" alt="Dice Image" />
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-[96px] font-bold">DICE GAME</h1>
        <button className="w-[220px] h-[44px] cursor-pointer rounded-lg text-[16px] font-medium bg-black text-white" onClick={toggle}>
          Play Now
        </button>
      </div>
    </div>
  );
};

export default StartGame;
