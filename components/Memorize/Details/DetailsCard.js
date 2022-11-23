import Botombar from "./Botombar";
import TopBar from "./TopBar";
import { UseStateContext } from "../../../context/StateContext";

const DetailsCard = ({ dua, serial }) => {
  const { language, isRefference } = UseStateContext();
  console.log(dua)
  return (
    <div>
      <div className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
        <div className="p-6">
          <TopBar serial={serial} dua={dua} />
          <div className="flex flex-col justify-start items-start">
            {/* Body */}
            {/* {(dua[index].top_bn ? dua[index].top_bn : dua[index].top_en) !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{language === 'bn' ? dua[index].top_bn : dua[index].top_en}</p>} */}
            <p className="my-5 text-title text-justify font-inter font-normal ">
              {language === "bn" ? dua.top_bn : dua.top_en}

            </p>
            {/* Arabic */}
            <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">
              {dua.dua_arabic}
            </p>
            <p className="my-5 text-title text-justify font-inter font-normal ">
              {language === "bn" ? dua.transliteration_bn : dua.transliteration_en}
            </p>
            <p className="my-5 text-title text-justify font-inter font-normal ">
              {language === "bn" ? dua.translation_bn : dua.translation_en}
            </p>

            {isRefference ? (
              <div>
                <p className="mt-2 ">{language === "bn" ? "রেফারেন্স" : "Reference"}</p>
                <div className="mt-1 text-sm text-title  w-full text-left">{language === 'bn' ? dua.refference_bn : dua.refference_en}</div>
              </div>
            ) : ""}
          </div>
        </div>
        <Botombar />
      </div>

    </div>
  );
};

export default DetailsCard;
