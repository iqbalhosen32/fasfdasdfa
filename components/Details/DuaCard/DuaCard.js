import { useEffect, useState } from "react";
import { UseStateContext } from "../../../context/StateContext";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";

const DuaCard = ({ dua }) => {
  const { language, isArabic, isTranslation, isTransliteration, isRefference, translationFont, arabicFont, selectedScript, selectedFont } = UseStateContext();
  const [animation, setAnimation] = useState(false);

  useEffect(
    () => {
      return () => {
        setAnimation(true);
      };
    },
    [dua[0].dua_id]
  );

  return (
    <div id={`${dua[0].dua_id}`} className="bg-red-100 rounded-2lg my-5 dark:bg-[#223449]">
      <div className="p-6">
        <DuaTopbar duaName={language === 'bn' ? dua[0].dua_name_bn : dua[0].dua_name_en} duaId={dua[0].dua_id} />
        <div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
          {dua.map(function (item, index) {
            return (
              <div className="w-full">
                {/* Body */}
                {(dua[index].top_bn ? dua[index].top_bn : dua[index].top_en) !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{language === 'bn' ? dua[index].top_bn : dua[index].top_en}</p>}
                {/* Arabic */}

                {dua[index].dua_arabic !== null && isArabic && (
                  <p style={{ fontSize: `${arabicFont}px` }} className=" my-5 text-title text-right leading-loose font-kgfq text-3xl">{selectedScript === "KGFQ" && dua[index].dua_arabic} {selectedScript === "Noor e Huda" && dua[index].clean_arabic
                  } {selectedScript === "Noor E Hedayet" && dua[index].dua_indopak}</p>
                )}
                {/* transliteration_en */}

                {(dua[index].transliteration_en || dua[index].transliteration_bn) !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{language === 'bn' ? dua[index].transliteration_bn : dua[index].transliteration_en}</p>
                )}

                {/* translation_en */}
                {(dua[index].translation_en || dua[index].translation_en) !== null && isTranslation && (
                  <p style={{ fontSize: `${translationFont}px` }} className=" my-5 text-title text-justify font-inter font-normal">{language === 'bn' ? dua[index].translation_bn : dua[index].translation_en}</p>
                )}

                {/* Dua Bottom Section */}
                {(dua[index].bottom_bn || dua[index].bottom_en) !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{language === 'bn' ? dua[index].bottom_bn : dua[index].bottom_en}</p>}

                {dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
              </div>
            );
          })}

          {isRefference ? (
            <div>
              <p className="mt-2 ">{language === "bn" ? "রেফারেন্স" : "Reference"}</p>
              <div className="mt-1 text-sm text-title  w-full text-left">{language === 'bn' ? dua[dua.length - 1].refference_bn : dua[dua.length - 1].refference_en}</div>
            </div>
          ) : ""}
        </div>
      </div>
      <DuaBottomBar audio={dua[0].audio} />
    </div>
  );
};

export default DuaCard;
