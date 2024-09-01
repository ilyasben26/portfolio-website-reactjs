import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useTranslation } from '../contexts/TranslationContext';

const Experiences = () => {
    const { translate } = useTranslation();
    const experiences = translate('experience.career.list');

    return (
        <div className='p-6 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">{translate('experience.career.name')}</h1>
                </div>
            </div>
            {experiences.map(experience => {
                const [imageLoaded, setImageLoaded] = useState(false);

                return (
                    <div key={experience.id} className='bg-white dark:bg-[#3c3a3a] dark:border-[#323131] border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                        {!imageLoaded && (
                            <div className="dark:bg-white dark:p-2 w-20 h-20 bg-gray-200 dark:bg-neutral-600 animate-pulse rounded-md mr-4"></div>
                        )}
                        <img
                            src={experience.imageUrl}
                            alt={experience.company}
                            className={`dark:bg-white dark:p-2 w-20 h-20 object-scale-down rounded-md mr-4 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(true)}
                        />
                        <div>
                            <h2 className="text-l font-semibold text-gray-700 dark:text-white">{experience.company}</h2>
                            <p className="text-sm text-gray-600 dark:text-neutral-400">{experience.subtitle}</p>
                            <div className="flex items-start mt-1">
                                <IoLocationOutline />
                                <p className="ml-1 text-xs text-gray-600 dark:text-neutral-400">{experience.location}</p>
                            </div>
                            <div className="flex items-start mt-1">
                                <MdOutlineCalendarMonth />
                                <p className="ml-1 text-xs text-gray-600 dark:text-neutral-400">{experience.duration}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Experiences;
