import Master from "../components/Layout/Master";
import Link from "next/link";
import Rodal from "rodal";
import DuaPopup from "../components/Modal/DuaPopup/DuaPopup";
import "rodal/lib/rodal.css";
import React, { useState } from "react";
import { UseStateContext } from "../context/StateContext";

const AllDua = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { subCategory, language } = UseStateContext();

  const getFilteredArr = (subCategory) => {
    const map = new Map();
    subCategory
      .sort((a, b) => a.subcat_name_en.localeCompare(b.subcat_name_en))
      .forEach((str) =>
        !map.has(str.subcat_name_en[0].toLowerCase())
          ? map.set(str.subcat_name_en[0].toLowerCase(), [str.subcat_name_en])
          : map.get(str.subcat_name_en[0].toLowerCase()).push(str.subcat_name_en)
      );
    return [...map];
  };
  const newArrayEn = getFilteredArr(subCategory);

  const getFilteredArrBn = (subCategory) => {
    const map = new Map();
    subCategory
      .sort((a, b) => a.subcat_name_bn.localeCompare(b.subcat_name_bn))
      .forEach((str) =>
        !map.has(str.subcat_name_bn[0].toLowerCase())
          ? map.set(str.subcat_name_bn[0].toLowerCase(), [str.subcat_name_bn])
          : map.get(str.subcat_name_bn[0].toLowerCase()).push(str.subcat_name_bn)
      );
    return [...map];
  };
  const newArrayBn = getFilteredArrBn(subCategory);

  return (
    <Master title={"All Dua"}>
      <div className="animate-fade-in-up scrl h-[calc(100vh_-_100px)] xs:pb-16 sm:pb-8 md:pb-4 md:pt-20 lg:pt-20 lg:pb-6 xl:pb-16 2xl:pb-16 3xl:pb-16">
        <div  >
          {
            language === 'bn' && newArrayBn.map(([key, values]) => {
              return (
                <div>
                  <button
                    id={key}
                    type="button"
                    onClick={() => setModalShow(true)}
                    style={{ scrollBehavior: "smooth" }}
                    className="text-black bg-blue-400 font-medium leading-tight uppercase transition duration-150 ease-in-out  h-11 w-11 text-lg flex justify-center items-center xs:mt-0 md:mt-5 lg:mt-5">
                    {key}
                  </button>
                  <div className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4 sm:grid-cols-1 sm:gap-x-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-2 lg:gap-x-4">
                    {
                      values.map((item, index) => {
                        return (
                          <Link key={index} href="">
                            <div className="group">
                              <div className="bg-red-100 flex items-center w-full h-22  pr-4 cursor-pointer  drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition duration-100 delay-100 dark:bg-[#223449]">
                                <div className={` flex justify-center  items-center h-15 w-15 mx-2.5 transition duration-100 delay-100  dark:bg-[#2c425a]`}>
                                </div>
                                <p className="font-inter text-left text-title text-sm lg:text-base w-[80%] font-semibold transition duration-100 delay-100 ">
                                  {item}
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                      })
                    }
                  </div>

                </div>
              )
            })
          }
          {
            language === 'en' && newArrayEn.map(([key, values]) => {
              return (
                <div>
                  <button
                    id={key}
                    type="button"
                    onClick={() => setModalShow(true)}
                    style={{ scrollBehavior: "smooth" }}
                    className="text-black bg-blue-400 font-medium leading-tight uppercase transition duration-150 ease-in-out  h-11 w-11 text-lg flex justify-center items-center xs:mt-0 md:mt-5 lg:mt-5">
                    {key}
                  </button>
                  <div className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4 sm:grid-cols-1 sm:gap-x-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-2 lg:gap-x-4">
                    {
                      values.map((item, index) => {
                        return (
                          <Link key={index} href="">
                            <div className="group">
                              <div className="bg-red-100 flex items-center w-full h-22  pr-4 cursor-pointer  drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition duration-100 delay-100 dark:bg-[#223449]">
                                <div className={` flex justify-center  items-center h-15 w-15 mx-2.5 transition duration-100 delay-100  dark:bg-[#2c425a]`}>
                                </div>
                                <p className="font-inter text-left text-title text-sm lg:text-base w-[80%] font-semibold transition duration-100 delay-100 ">
                                  {item}
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }

        </div>
        <div>
          <Rodal
            showCloseButton={false}
            width={700}
            height={500}
            customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
            visible={modalShow}
            onClose={() => setModalShow(false)}>
            <DuaPopup alpaData={language === 'bn' ? newArrayBn : newArrayEn} onClose={() => setModalShow(false)} />
          </Rodal>
        </div>
      </div>
    </Master >
  );
};

export default AllDua;
