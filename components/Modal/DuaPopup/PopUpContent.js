import React from "react";
import PouUpAlpha from "./PouUpAlpha";

function PopUpContent(props) {
  return (
    <div className="">
      <div className="mt-4 mb-4 flex justify-center">
        {
          props.alpaData?.map(([item, index]) => <PouUpAlpha alpa={item} />)
        }
      </div>

    </div>
  );
}

export default PopUpContent;
