import React, { useState } from "react";
import CatList from "./Sidebar/RightBarMenu";
import LanguageSettings from "./Sidebar/Settings/LanguageSettings";
import GeneralSettings from "./Sidebar/Settings/GeneralSettings";
import FontSettings from "./Sidebar/Settings/FontSettings";
import AppearanceSettings from "./Sidebar/Settings/AppearanceSettings";
import { useDispatch, useSelector } from "react-redux";
import { ScriptDropdown } from "../../dataStore/feature/GlobalDataSlicer";
import { UseStateContext } from "../../context/StateContext";

function RightBar() {
  const { language } = UseStateContext();
  const scriptDropdown = useSelector((state) => state.globalData.scriptDropdown);
  const dispatch = useDispatch();

  const globalDataHandler = () => {
    dispatch(ScriptDropdown(scriptDropdown === true ? false : ""));
  };

  const [dropdown, setDropdown] = useState(1);

  function handleDropdown(id) {
    if (dropdown === id || (dropdown && id === undefined)) {
      setDropdown(null);
    }
    if (dropdown !== id) {
      setDropdown(id);
    }
  }

  return (
    <div
      className={`{w-full transition overflow-hidden
`}>
      <div
        className="b-red-100 dark:bg-[#223449] h-[84vh]  xs:h-fit xs:  
        sm:h-[90%] 
        sm:relative 
        sm:pb-3
        md:h-fit
        md:pb-4
        lg:h-fit
        lg:pb-4">
        <div
          className={`container text-center pt-9 pb-6 text-xl 
          xs:pt-6
          sm:pt-4
          
          `}>
          {language === 'bn' ? 'সেটিংস' : 'Settings'}
        </div>

        <div className="xs:pb-2">
          <CatList
            active={dropdown === 1 ? true : false}
            onClick={() => handleDropdown(1)}

            text={language === 'bn' ? "ভাষা সেটিংস" : "Language Settings"}
            child={dropdown === 1 && <LanguageSettings />}
          />
          <CatList
            active={dropdown === 2 ? true : false}
            onClick={() => handleDropdown(2)}

            text={language === 'bn' ? "সাধারণ সেটিংস" : "General Settings"}
            child={dropdown === 2 && <GeneralSettings />}
          />
          <CatList
            active={dropdown === 3 ? true : false}
            onClick={() => handleDropdown(3)}

            text={language === 'bn' ? "ফন্ট সেটিংস" : "Font Settings"}
            child={dropdown === 3 && <FontSettings scriptDropdown={scriptDropdown} />}
          />

        </div>
      </div>
    </div>
  );
}

export default RightBar;
