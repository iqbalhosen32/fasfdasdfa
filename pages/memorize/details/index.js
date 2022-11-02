import Master from "../../../components/Layout/Master";
import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";
import { UseStateContext } from "../../../context/StateContext";

const MyApp = () => {
  const { subject } = UseStateContext();
  console.log(subject)
  return (
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
          subject?.map((item, index) => {
            return (
              item.dua?.map((item, index) => {
                console.log(item)
                return (
                  <MemorizeDetails key={index} dua={item} />
                )
              }))
          })
        }
      </div>
    </Master>
  );
};

export default MyApp;
