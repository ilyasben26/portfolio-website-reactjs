import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../translations/en.json';
import deTranslations from '../translations/de.json';
import frTranslations from '../translations/fr.json';

interface Translations {
    [key: string]: string;
}

interface TranslationContextType {
    language: string;
    setLanguage: (language: string) => void;
    translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Load the initial language from localStorage if available, otherwise default to 'en'
    const [language, setLanguage] = useState<string>(() => {
        return localStorage.getItem('language') || 'en';
    });

    const translations: { [key: string]: Translations } = {
        en: enTranslations,
        de: deTranslations,
        fr: frTranslations,
    };

    const translate = (key: string): string => {
        return translations[language][key] || key;
    };

    useEffect(() => {
        // Save the selected language to localStorage whenever it changes
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <TranslationContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
