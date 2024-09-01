import { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const ProjectsLists = () => {
    const { translate } = useTranslation();
    const projects = translate('projects.list');

    return (
        <div className='p-6 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            {projects.map(project => {
                const [imageLoaded, setImageLoaded] = useState(false);

                return (
                    <div key={project.id} className='bg-white dark:bg-[#3c3a3a] dark:border-[#323131] border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                        {/* Placeholder while the image loads */}
                        {!imageLoaded && (
                            <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-600 animate-pulse rounded-md mr-4"></div>
                        )}
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className={`w-20 h-20 object-scale-down rounded-md mr-4 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(true)} // In case the image fails to load, hide the placeholder
                        />
                        <div className="mr-2">
                            <h2 className="text-l font-semibold text-gray-700 dark:text-white">{project.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-neutral-400 mr-1">{project.description}</p>
                        </div>
                        <a className="ml-auto" href={project.verifyLink} target="_blank" rel="noopener noreferrer">
                            <button
                                className="text-gray-400 hover:text-gray-700 dark:text-white relative bg-white dark:bg-[#3c3a3a] dark:border-[#323131] text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                            >
                                Code
                            </button>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsLists;
