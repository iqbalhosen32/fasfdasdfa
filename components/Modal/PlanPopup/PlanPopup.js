import React from "react";
import PopUpTop from "../PopUpTop";
import PopupCont from "./PopupCont";

function PlanPopup({ onClose, duaData }) {
  // console.log(duaData)
  return (
    <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current dark:bg-[#223449]">
      <PopUpTop title={"Choose Folder"} />
      <PopupCont duaData={duaData} onClose={onClose} />
    </div>
  );
}

export default PlanPopup;
