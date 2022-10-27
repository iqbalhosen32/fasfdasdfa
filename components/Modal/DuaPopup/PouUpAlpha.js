import React from "react";

function PouUpAlpha(props) {
  return (
    <div>
      <a
        className="uppercase mx-1 w-14 h-14 block font-poppins font-normal text-[1.75rem] leading-10 px-3 py-1  hover:bg-[#EFEFEF] text-title flex items-center justify-center col-start-3  dark:hover:bg-[#324D6B]"
        href={`#${props.alpa}`}
        onClick={() => props.onClose()}
      >
        {props.alpa}
      </a>
    </div>
  );
}

export default PouUpAlpha;
