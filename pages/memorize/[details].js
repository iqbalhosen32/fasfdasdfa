// import Master from "../../../components/Layout/Master";
// import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";
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

import React from 'react'

const details = (props) => {
    console.log(props.title)
    return (
        <div>details</div>
    )
}

export default details;
