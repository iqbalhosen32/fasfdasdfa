
// import { UseStateContext } from "../../../context/StateContext";

// const MyApp = () => {
//     const { subject } = UseStateContext();
//     return (
//         //     <Master>
//         //         <div className="scrl h-[calc(100vh_-_100px)]
//         //   xs:pb-10
//         //   sm:pb-10
//         //   md:pt-24 md:pb-5
//         //   lg:pt-24 lg:pb-5
//         //   xl:pb-16
//         //   2xl:pb-16
//         //   3xl:pb-16">
//         //             {
//         //                 subject?.map((item, index) => {
//         //                     console.log(item)
//         //                     // return (
//         //                     //   item.dua?.map((item, index) => {
//         //                     return (
//         //                         <MemorizeDetails key={index} dua={item} />
//         //                     )
//         //                     // }))
//         //                 })
//         //             }
//         //         </div>
//         //     </Master>
//         <div>
//             <h1>hello</h1>
//         </div>
//     );
// };

// export default MyApp;

import React, { useState } from 'react'
import { useEffect } from 'react';
import { UseStateContext } from "../../context/StateContext";
import Master from "../../components/Layout/Master";
import MemorizeDetails from "../../components/Memorize/Details/DetailsCard";



const details = ({ products }) => {
  const { subject } = UseStateContext();
  let first;
  // let first1;

  const folder = subject?.map((item) => products === item.name && item.dua);

  folder?.map((item) => item && (first = item))
  // const secondd = folder?.map((item) => first1 = item)
  console.log(first, products, folder)

  return (
    <div>
      <Master>
        <div className="scrl h-[calc(100vh_-_100px)]
            xs:pb-10
            sm:pb-10
            md:pt-24 md:pb-5
            lg:pt-24 lg:pb-5
            xl:pb-16
            2xl:pb-16
            3xl:pb-16">
          {
            first !== false && first?.map((item, index) => {
              console.log(item)
              // return (
              //   item.dua?.map((item, index) => {
              return (
                <MemorizeDetails key={index} serial={index} dua={item} />
              )
              // }))
            })
          }
        </div>
      </Master>
    </div>
  )
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const products = slug;

  return {
    props: { products }
  }
}

export default details;
