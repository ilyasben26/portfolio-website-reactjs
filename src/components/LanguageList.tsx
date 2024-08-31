import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { RiTranslate } from 'react-icons/ri';

const LanguageList: React.FC = () => {
    const { setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setCurrentLanguage(lang);
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
            {isOpen && (
                <div
                    className="absolute left-1/2 w-25 border-2 dark:border-[#323131] bg-gray-100 dark:bg-neutral-700 rounded shadow-xl z-20 transition-transform duration-300 ease-out transform translate-y-2 opacity-0"
                    style={{
                        transitionProperty: 'transform, opacity',
                        transform: 'translateY(2px) translateX(-50%)',
                        opacity: 1,
                        transformOrigin: 'top center',
                    }}
                >
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className={`block w-full px-4 py-2 text-left rounded-sm ${currentLanguage === 'en'
                            ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white'
                            : 'text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white'
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('de')}
                        className={`block w-full px-4 py-2 text-left rounded-sm ${currentLanguage === 'de'
                            ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white'
                            : 'text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white'
                            }`}
                    >
                        Deutsch
                    </button>
                    <button
                        onClick={() => handleLanguageChange('fr')}
                        className={`block w-full px-4 py-2 text-left rounded-sm ${currentLanguage === 'fr'
                            ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white'
                            : 'text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white'
                            }`}
                    >
                        Français
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageList;
