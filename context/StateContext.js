import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import PUrls from "../dataStore/api/urls";

const Context = createContext();

const Subject = [

    { name: "Favorite" },
];

export const StateContext = ({ children }) => {
    const [language, setLanguage] = useState('');
    const [isArabic, setArabic] = useState();
    const [isTranslation, setTranslation] = useState();
    const [isTransliteration, setTransliteration] = useState();
    const [isRefference, setRefference] = useState();
    const [translationFont, setTranslationFont] = useState(16);
    const [arabicFont, setArabicFont] = useState(15);
    const [selectedScript, setSelectedScript] = useState("KGFQ");
    const [selectedFont, setSelectedFont] = useState("KGFQ");

    const [subCategory, setSubCategory] = useState([]);

    const [subject, setSubject] = useState();

    const [duaCart, setDuaCart] = useState('')



    const [folder, setFolder] = useState();

    console.log(folder)

    const newFolder = (e) => {
        e.target.value !== '' && setFolder(e.target.value)
    }

    const setMode = (e) => {
        setLanguage(e);
        localStorage.setItem('languageMode', e);

    };


    const handleSave = (duaData, selected) => {
        // console.log(duaData, 'sasdadf')
        const exist = folder === undefined ? duaCart.find((item) => item.name === selected?.name) : duaCart.find((item) => item.name === folder)
        if (exist) {
            console.log(exist, selected)
            const newDuaCart = duaCart.map((item) =>
                item?.name === selected?.name ? exist.dua ? { ...exist, dua: [...exist?.dua, duaData] } : { ...exist, dua: [duaData] } : item
            )
            setDuaCart(newDuaCart)
            localStorage.setItem('subject', JSON.stringify(newDuaCart))
        } else {
            const newDuaCart = [...duaCart, { name: folder, name: folder, dua: [duaData] }]
            setDuaCart(newDuaCart)
            localStorage.setItem('subject', JSON.stringify(newDuaCart))
        }
        // const newDuaCart = [...duaCart, { ...duaData }]
        // setDuaCart(newDuaCart)
        // // const jjj = {folder === "" ? "" : }
        // const newData = [...subject, folder === undefined ? { name: selected?.name, dua: newDuaCart } : { name: folder, dua: newDuaCart }]
        // localStorage.setItem('subject', JSON.stringify(newData))
    }


    useEffect(() => {

        //Language Settings
        setLanguage(localStorage.getItem('languageMode') === null ? localStorage.setItem('languageMode', "en") : localStorage.getItem('languageMode'))

        //General Settings
        setArabic(localStorage.getItem('showArabic') === null ? localStorage.setItem('showArabic', true) : localStorage.getItem('showArabic'))

        setTranslation(localStorage.getItem('showTranslation') === null ? localStorage.setItem('showTranslation', true) : localStorage.getItem('showTranslation'))

        setTransliteration(localStorage.getItem('showTransliteration') === null ? localStorage.setItem('showTransliteration', true) : localStorage.getItem('showTransliteration'))

        setRefference(localStorage.getItem('showRefference') === null ? localStorage.setItem('showRefference', true) : localStorage.getItem('showRefference'))

        //Font Settings
        setSelectedScript(localStorage.getItem('selectedScript') === null ? localStorage.setItem('selectedScript', "KGFQ") : localStorage.getItem('selectedScript'))

        setSelectedFont(localStorage.getItem('selectedFont') === null ? localStorage.setItem('selectedFont', "KGFQ") : localStorage.getItem('selectedFont'))

        setTranslationFont(!localStorage.getItem('translationFont') ? localStorage.setItem('translationFont', 16) : localStorage.getItem('translationFont'))

        setArabicFont(!localStorage.getItem('arabicFont') ? localStorage.setItem('arabicFont', 20) : localStorage.getItem('arabicFont'))

        //all dua 
        axios.get(PUrls.duaSubCategory).then((response) => {
            const result = response.data.result;
            setSubCategory(result);
        });

        setSubject(localStorage.getItem('subject') === null ? localStorage.setItem('subject', JSON.stringify(Subject)) : JSON.parse(localStorage.getItem('subject')))



        setDuaCart(localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [])

    }, [])

    if (!subCategory) return null;


    const setScriptMode = (e) => {
        setSelectedScript(e);
        localStorage.setItem('selectedScript', e);

    };

    const setFontMode = (e) => {
        setSelectedFont(e);
        localStorage.setItem('selectedFont', e);

    };

    const onSetTranslationFont = (e) => {
        setTranslationFont(e);
        localStorage.setItem('translationFont', e);
    };

    const onSetArabicFont = (e) => {
        setArabicFont(e);
        localStorage.setItem('arabicFont', e);
    };

    const onSetArabic = (e) => {
        setArabic(e);
        localStorage.setItem('showArabic', e);
    };

    const onSetTranslation = (e) => {
        setTranslation(e);
        localStorage.setItem('showTranslation', e);
    };

    const onSetTransliteration = (e) => {
        setTransliteration(e);
        localStorage.setItem('showTransliteration', e);
    };

    const onSetRefference = (e) => {
        setRefference(e);
        localStorage.setItem('showRefference', e);
    };



    return (
        <Context.Provider
            value={{
                language,
                setLanguage,
                setMode,
                isArabic,
                setArabic,
                isTranslation,
                setTranslation,
                isTransliteration,
                setTransliteration,
                isRefference,
                setRefference,
                onSetArabic,
                onSetTranslation,
                onSetTransliteration,
                onSetRefference,
                translationFont,
                setTranslationFont,
                onSetTranslationFont,
                arabicFont,
                setArabicFont,
                onSetArabicFont,
                selectedScript,
                setScriptMode,
                selectedFont,
                setFontMode,
                subCategory,
                subject,
                setSubject,
                newFolder,
                handleSave,
                // selected,
                // setSelected,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const UseStateContext = () => useContext(Context);