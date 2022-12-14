import { useState } from "react";
import { UseStateContext } from "../../../context/StateContext";

const TopBar = ({ dua, serial }) => {
  const { language } = UseStateContext();

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
          <p className=" font-inter text-lg">{serial + 1}. {language === 'bn' ? dua.dua_name_bn : dua.dua_name_en}</p>
        </div>
        <img onClick={handleTick} className="stroke-cyan-500" src={`/assets/memorize/${tick}.svg`} alt="" />
      </div>
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:hidden"></div>
    </div>
  );
};

export default TopBar;
