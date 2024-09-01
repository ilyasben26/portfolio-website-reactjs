import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const ThmBadge = () => {
    const { translate } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [infoImageLoaded, setInfoImageLoaded] = useState(false);

    return (
        <div className='p-6 mt-2 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">TryHackMe</h1>
                </div>
                <a href="https://tryhackme.com/p/benyamnailyas" target="_blank" rel="noopener noreferrer">
                    <button
                        className="relative text-gray-400 dark:text-white hover:text-gray-700 bg-white dark:bg-[#3c3a3a] dark:border-[#323131] dark:hover:border-neutral-800 text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                    >
                        {translate('about-me.certifications.verify')}
                        <div className='ml-2'><FaExternalLinkAlt /></div>
                    </button>
                </a>
            </div>
            <div className='mt-4 flex justify-center'>
                <div className='flex flex-col items-center'>
                    {/* Badge Image */}
                    {!imageLoaded && (
                        <div className="w-full h-48 bg-gray-200 dark:bg-neutral-600 animate-pulse"></div>
                    )}
                    <img
                        src="/images/education/thm-profile.png"
                        alt="TryHackMe Badge"
                        className={`object-scale-down transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                    />


                    {!infoImageLoaded && (
                        <div className="w-2/3 h-32 mt-2 bg-gray-200 dark:bg-neutral-600 animate-pulse"></div>
                    )}
                    <img
                        src="/images/education/thm-profile-info-transparent.png"
                        alt="TryHackMe Badge info"
                        className={`object-scale-down w-2/3 mt-2 transition-opacity duration-300 ${infoImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setInfoImageLoaded(true)}
                        onError={() => setInfoImageLoaded(true)} // In case the image fails to load, hide the placeholder
                    />
                </div>
            </div>
        </div>
    );
};

export default ThmBadge;
