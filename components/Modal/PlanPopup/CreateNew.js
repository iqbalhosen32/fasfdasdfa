import React from "react";
import { useState } from "react";
import { UseStateContext } from "../../../context/StateContext";

function CreateNew({ onClose, duaData }) {
  const { newFolder, handleSave, } = UseStateContext();


  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Or, Create New Plan</span>

        <input
          className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
          type="text"
          name="plan"
          placeholder="Name of new plan"
          onChange={newFolder}
        />
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end mt-7 mb-4">
        <button
          onClick={() => onClose()}
          type="button"
          className="w-40 h-11 inline-block bg-[#EDEDED]   transition duration-150 ease-in-out font-inter font-medium text-base leading-5 text-[#6b6b6b] mr-6"
          data-bs-dismiss="modal">
          Cancel
        </button>
        <button
          onClick={() => handleSave(duaData)}
          type="button"
          className="w-40 h-11 inline-block   transition duration-150 ease-in-out ml-1 font-inter font-medium text-base leading-5 text-black ">
          Save
        </button>
      </div>
    </label>
  );
}

export default CreateNew;
