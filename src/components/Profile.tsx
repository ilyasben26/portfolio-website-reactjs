import { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Profile = () => {
    const { translate } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div>
            <div className="m-5 flex items-center text-gray-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                <h1 className="text-xl">{translate('about-me.occupation')}</h1>
            </div>
            <div className="m-3 flex flex-col-reverse md:flex-row items-center">
                <div className='md:w-[400px]'>
                    <h1 className="text-3xl font-primaryBold">{translate('about-me.name')}</h1>
                    <br />
                    <p className="text-sm text-justify dark:text-neutral-300">
                        {translate('about-me.description')}
                    </p>
                </div>
                <div className="md:w-1/3 md:pl-10 flex justify-center">
                    {/* Placeholder while the image loads */}
                    {!imageLoaded && (
                        <div className="border-4 border-gray-400 dark:border-neutral-700 rounded-full w-52 h-52 mb-5 md:w-52 md:h-52 bg-gray-200 dark:bg-neutral-600 animate-pulse"></div>
                    )}
                    <img
                        src="/images/profilepic.jpg"
                        alt="Ilyas Benyamna"
                        className={`border-4 border-gray-400 dark:border-neutral-700 rounded-full w-52 h-52 mb-5 md:w-52 md:h-52 object-cover shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
