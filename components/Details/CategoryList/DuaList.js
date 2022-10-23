import DuaText from "../Ui/DuaText";
import { useSelector } from "react-redux";
import { UseStateContext } from "../../../context/StateContext";


export default function DuaList(props) {
  const { language } = UseStateContext();
  const selectedDua = useSelector((state) => state.subCat.subCatId);
  let dua = selectedDua[`${props.subCatId}`]?.result?.filter(item => language === 'bn' ? item.subcat_name_bn : item.subcat_name_en != null);

  return <div className="mt-2 cursor-pointer">{selectedDua && dua?.map((item) => <DuaText catId={item.cat_id} subCatId={item.subcat_id} duaId={item.dua_id} name={language === 'bn' ? item.subcat_name_bn : item.subcat_name_en} />)}</div>;
}
