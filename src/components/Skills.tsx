import { useState } from 'react';
import { IoInformationCircleSharp } from "react-icons/io5";
import { useTranslation } from '../contexts/TranslationContext';

const Skills = () => {
    const { translate } = useTranslation();
    const skillsData = translate('about-me.skills.list');

    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className='p-6 mt-2 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">{translate('about-me.skills.name')}</h1>
                    <div className="relative ml-1 mb-3 group">
                        <IoInformationCircleSharp className="cursor-pointer" />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                            {translate('about-me.skills.info')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {skillsData.map((skillCategory) => (
                    <div key={skillCategory} className="mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer bg-white dark:bg-[#3c3a3a] dark:border-[#323131] p-2 rounded-md shadow-sm border-2 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                            onClick={() => toggleCategory(skillCategory.category)}
                        >
                            <h2 className="text-md font-medium text-gray-700 dark:text-white">{skillCategory.category}</h2>
                            <span className={`transform transition-transform ${openCategory === skillCategory.category ? 'rotate-180' : 'rotate-0'}`}>
                                ▼
                            </span>
                        </div>
                        {openCategory === skillCategory.category && (
                            <ul className="mt-2 pl-4 list-disc list-inside text-gray-600 dark:text-neutral-400">
                                {skillCategory.list.map((skill, skillCategory) => (
                                    <li key={skillCategory + skill}>{skill}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
