import Experiences from "../components/Experiences";
import { useTranslation } from '../contexts/TranslationContext';

export default function Experience() {
    const { translate } = useTranslation();

    return (
        <div className="rounded-xl bg-white dark:bg-neutral-800 p-2 shadow-md max-w-xl mx-auto mt-2 mb-16 ">
            <div className="m-5 flex items-center text-gray-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                <h1 className="text-xl">{translate('experience.name')}</h1>
            </div>
            <Experiences />
        </div >
    );
}