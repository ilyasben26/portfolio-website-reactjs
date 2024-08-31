import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from '../contexts/TranslationContext';

const Certifications = () => {
    const { translate } = useTranslation();
    const certifications = translate('about-me.certifications.list');


    return (
        <div className='p-6 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">{translate('about-me.certifications.name')}</h1>
                </div>
                <a href="https://www.credly.com/users/ilyas-benyamna" target="_blank" rel="noopener noreferrer">
                    <button
                        className="relative text-gray-400 dark:text-white hover:text-gray-700  bg-white dark:bg-[#3c3a3a] dark:border-[#323131]  dark:hover:border-neutral-800 text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                    >
                        {translate('about-me.certifications.view-all')}
                        <div className='ml-2'><FaExternalLinkAlt /></div>
                    </button>
                </a>
            </div>
            {certifications.map(cert => (
                <div key={cert.id} className='bg-white dark:bg-[#3c3a3a] dark:border-[#323131] border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                        <h2 className="text-l font-semibold text-gray-700 dark:text-white">{cert.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">{cert.subtitle}</p>
                    </div>
                    <a className="ml-auto" href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className=" text-gray-400 hover:text-gray-700 dark:text-white relative bg-white dark:bg-[#3c3a3a] dark:border-[#323131] text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                        >
                            {translate('about-me.certifications.verify')}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
