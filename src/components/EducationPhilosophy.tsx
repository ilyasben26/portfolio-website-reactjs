import { useTranslation } from '../contexts/TranslationContext';

const EducationPhilosophy = () => {
    const { translate } = useTranslation();
    return (
        <>
            <div className="m-5 flex items-center text-gray-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-gray-300  dark:bg-neutral-500 rounded-full mr-4"></span>
                <h1 className="text-xl">{translate('education.name')}</h1>
            </div>
            <div className="text-justify mx-3 my-8">

                <p className="text-sm dark:text-neutral-400">
                    {translate('education.description')}
                </p>

            </div>
        </>
    );
};

export default EducationPhilosophy;
