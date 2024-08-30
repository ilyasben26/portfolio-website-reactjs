import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { RiTranslate } from 'react-icons/ri';

const LanguageList: React.FC = () => {
    const { setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="mr-3 p-1 text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white rounded-full relative group hover:bg-neutral-200 dark:hover:bg-neutral-700"
            >
                <RiTranslate size={30} />
            </button>
            <div
                className={`absolute left-1/2 w-25 border-2 dark:border-[#323131] bg-gray-100 dark:bg-neutral-700 rounded shadow-xl z-20 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}
                style={{
                    transitionProperty: 'transform, opacity',
                    transform: isOpen ? 'translateY(2px) translateX(-50%)' : 'translateY(-7px) translateX(-50%)',
                    opacity: isOpen ? 1 : 0,
                    transformOrigin: 'top center',
                }}
            >
                <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full px-4 py-2 text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white text-left rounded-sm"
                >
                    English
                </button>
                <button
                    onClick={() => handleLanguageChange('de')}
                    className="block w-full px-4 py-2 text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white text-left rounded-sm"
                >
                    Deutsch
                </button>
                <button
                    onClick={() => handleLanguageChange('fr')}
                    className="block w-full px-4 py-2 text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white text-left rounded-sm"
                >
                    Français
                </button>
            </div>
        </div>
    );
};

export default LanguageList;
