'use client';
import React from 'react';
import { useLanguage } from '@/app/context/translate';

const LanguageMenu = ({ isOpened }) => {
    const { language, changeLanguage } = useLanguage();

    const languages = ['eng', 'rus', 'ukr'];

    const handleLanguageChange = () => {
        // Find the index of the current language
        const currentIndex = languages.indexOf(language);
        // Determine the next language in the cycle
        const nextLanguage = languages[(currentIndex + 1) % languages.length];
        // Change to the next language
        changeLanguage(nextLanguage);
    };

    return (
        <div className="right-[55%] top-10 fixed md:top-[unset] md:bottom-28 z-50 md:right-28">
            <div className="relative">
                {/* Main Language Button that cycles through languages */}
                <button
                    onClick={handleLanguageChange}
                    className="bg-green-700 flex items-center justify-center text-white w-10 h-10 z-100 absolute rounded-full p-3 hover:bg-green-800 transition-all duration-300"
                >
                    {language === 'eng'
                        ? 'EN'
                        : language === 'rus'
                        ? 'RU'
                        : 'UA'}
                </button>
            </div>
        </div>
    );
};

export default LanguageMenu;
