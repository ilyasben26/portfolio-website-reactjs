import { IoDocumentTextOutline } from "react-icons/io5";
import { useTranslation } from '../contexts/TranslationContext';

const Publications = () => {
    const { translate } = useTranslation();
    const publications = translate('education.publications.list')

    return (
        <div className='p-6 mt-2 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">{translate('education.publications.name')}</h1>
                </div>
            </div>
            {publications.map(publication => (
                <div key={publication.id} className='bg-white dark:bg-[#3c3a3a] dark:border-[#323131] border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <IoDocumentTextOutline className="text-gray-500 dark:text-white text-7xl" />
                    <div className="flex-1 mx-4">
                        <h2 className="text-base font-semibold text-gray-700 dark:text-white">{publication.title}</h2>
                        <p className="text-xs text-justify text-gray-600 dark:text-neutral-400">{publication.subtitle}</p>
                    </div>
                    <a href={publication.readLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className="ml-auto text-gray-400 dark:text-white hover:text-gray-700 relative bg-white dark:bg-[#3c3a3a] dark:border-[#323131] text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                        >
                            {translate('education.publications.read')}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Publications;
