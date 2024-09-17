'use client';
import { createContext, useContext, useState } from 'react';

const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {
    const [language, setLanguage] = useState('ukr');

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <TranslateContext.Provider value={{ language, changeLanguage }}>
            {children}
        </TranslateContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(TranslateContext);
};

export default TranslateProvider;
