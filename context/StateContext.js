import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [language, setLanguage] = useState('');
    const [isArabic, setArabic] = useState();
    const [isTranslation, setTranslation] = useState();
    const [isTransliteration, setTransliteration] = useState();
    const [isRefference, setRefference] = useState();

    useEffect(() => {
        setLanguage(localStorage.getItem('languageMode') === null ? localStorage.setItem('languageMode', "en") : localStorage.getItem('languageMode', "en"))

    }, [])

    const setMode = (e) => {
        setLanguage(e);
        localStorage.setItem('languageMode', e);

    };


    useEffect(() => {
        setArabic(localStorage.getItem('showArabic') === null ? localStorage.setItem('showArabic', true) : localStorage.getItem('showArabic'))
        setTranslation(localStorage.getItem('showTranslation') === null ? localStorage.setItem('showTranslation', true) : localStorage.getItem('showTranslation'))
        setTransliteration(localStorage.getItem('showTransliteration') === null ? localStorage.setItem('showTransliteration', true) : localStorage.getItem('showTransliteration'))
        setRefference(localStorage.getItem('showRefference') === null ? localStorage.setItem('showRefference', true) : localStorage.getItem('showRefference'))
    }, [])

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
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const UseStateContext = () => useContext(Context);