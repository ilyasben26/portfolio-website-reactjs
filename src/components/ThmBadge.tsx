import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from '../contexts/TranslationContext';

const ThmBadge = () => {
    const { translate } = useTranslation();

    return (
        <div className='p-6 mt-2 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">TryHackMe</h1>
                </div>
                <a href="https://tryhackme.com/p/benyamnailyas" target="_blank" rel="noopener noreferrer">
                    <button
                        className="relative text-gray-400 dark:text-white hover:text-gray-700  bg-white dark:bg-[#3c3a3a] dark:border-[#323131]  dark:hover:border-neutral-800 text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                    >
                        {translate('about-me.certifications.verify')}
                        <div className='ml-2'><FaExternalLinkAlt /></div>
                    </button>
                </a>
            </div>
            <div className='mt-4 flex justify-center'>
                <div className='flex flex-col items-center'>
                    <img
                        src="/images/education/thm-profile.png"
                        alt="TryHackMe Badge"
                        className="object-scale-down"
                    />
                    <img
                        src="/images/education/thm-profile-info-transparent.png"
                        alt="TryHackMe Badge info"
                        className="object-scale-down w-2/3 mt-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default ThmBadge;
