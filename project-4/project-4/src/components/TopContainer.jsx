import { useState } from "react";

const TopContainer = ({ searchFood, filterBtns, filterFood, selectedBtn }) => {
  const arrNumber = ["All", "Breakfast", "Lunch", "Dinner"];
  const [selectedMenu, setSelectedMenu] = useState("All");

  return (
    <div className="bg-[#323334] h-[240px]">
      <div className="flex justify-around items-center h-[160px]">
        <img src="/images/Foody Zone.svg" alt="" />
        <input
          onChange={searchFood}
          className="border-1 border-red-500 py-2 px-4 rounded-sm text-white"
          type="text"
          placeholder="Search Food...."
        />
      </div>
            <div className="flex justify-center items-center gap-4 h-[80px]">
        {filterBtns?.map((btn, i) => (
          <button
            key={i}
            onClick={() => filterFood(btn.type)}
            className={`rounded-md px-3 py-1 text-white transition-all duration-200 active:scale-95 ${
              selectedBtn === btn.type ? "bg-red-500" : "bg-[#ff4343]"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>

    </div>
  );
};

export default TopContainer;
