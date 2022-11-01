import { useState } from "react";

const TopBar = ({ dua }) => {
  console.log(dua?.dua_name_en)
  const [tick, setTick] = useState("tick");

  const handleTick = () => {
    if (tick === "tick") {
      setTick("greentick");
    } else {
      setTick("tick");
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  justify-start items-center ">
          {/* DuaName */}
          <p className=" font-inter text-lg">{dua?.dua_name_en}</p>
        </div>
        <img onClick={handleTick} className="stroke-cyan-500" src={`/assets/memorize/${tick}.svg`} alt="" />
      </div>
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:hidden"></div>
    </div>
  );
};

export default TopBar;
