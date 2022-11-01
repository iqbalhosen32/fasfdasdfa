import React from "react";
import SelectOption from "../BookmarkPopup/SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNew from "./CreateNew";

function PopupCont({ onClose, duaData }) {
  return (
    <div className="mx-8">
      <SelectOption />
      <CreateNew duaData={duaData} onClose={onClose} />
      {/* <PopupBtn onClose={onClose} /> */}
    </div>
  );
}

export default PopupCont;
