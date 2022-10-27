import React from "react";
import PouUpAlpha from "./PouUpAlpha";

function PopUpContent(props) {
  return (
    <div className="items-stretch flex justify-center">
      <div className="mt-5 mb-4 flex grid grid-cols-4 justify-center">
        {
          props.alpaData?.map(([item, index]) => <PouUpAlpha onClose={props.onClose} alpa={item} />)
        }
      </div>

    </div>
  );
}

export default PopUpContent;
