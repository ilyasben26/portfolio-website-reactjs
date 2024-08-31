import React from "react";
import { useTranslation } from "../contexts/TranslationContext";

interface LanguageModalProps {
    onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
    const { setLanguage } = useTranslation(); // Assuming `setLanguage` is available in the context

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang); // Update the language
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-75 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg text-center max-w-sm">
                <div className="flex flex-col items-center space-y-4">
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className={`block w-full px-4 py-2 text-center rounded-md text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white `}
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('de')}
                        className={`block w-full px-4 py-2 text-center rounded-md text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white`}
                    >
                        Deutsch
                    </button>
                    <button
                        onClick={() => handleLanguageChange('fr')}
                        className={`block w-full px-4 py-2 text-center rounded-md text-black hover:bg-neutral-200 dark:text-white hover:dark:bg-neutral-800 dark:hover:text-white`}
                    >
                        Français
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
