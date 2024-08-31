import { useTranslation } from '../contexts/TranslationContext';

const CallToActionContact = () => {
    const { translate } = useTranslation();

    return (
        <div className='p-6 mt-2 text-center'>
            <h1 className="text-4xl">{translate('about-me.reach-out')}</h1>
            <div className="flex justify-center mt-2">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 54.943346866721186 339.83261013387516"
                    className="w-24 h-96"
                >
                    <g strokeLinecap="round">
                        <g transform="translate(32.09931689433063 329.5783189309442) rotate(357.4220481724335 -3.0544898430945864 -159.57447094003965)">
                            <path
                                d="M-0.01 0.55 C0.56 -11.91, 7.32 -55.28, 3.36 -75.59 C-0.61 -95.89, -23.48 -105.11, -23.81 -121.27 C-24.14 -137.42, -0.97 -155.01, 1.38 -172.5 C3.73 -189.98, -12.17 -212.16, -9.71 -226.18 C-7.25 -240.19, 11.93 -241.15, 16.16 -256.61 C20.38 -272.06, 15.78 -308.47, 15.62 -318.9"
                                className="stroke-black dark:stroke-white"
                                strokeWidth="2.5"
                                fill="none"
                                strokeDasharray="8 10"
                            />
                        </g>
                        <g transform="translate(32.09931689433063 329.5783189309442) rotate(357.4220481724335 -3.0544898430945864 -159.57447094003965)">
                            <path
                                d="M-6.55 -23.58 C-3.89 -17.32, -2.03 -10.36, -0.01 0.55"
                                className="stroke-black dark:stroke-white"
                                strokeWidth="2.5"
                                fill="none"
                            />
                        </g>
                        <g transform="translate(32.09931689433063 329.5783189309442) rotate(357.4220481724335 -3.0544898430945864 -159.57447094003965)">
                            <path
                                d="M10.49 -22.13 C8.19 -16.3, 5.08 -9.76, -0.01 0.55"
                                className="stroke-black dark:stroke-white"
                                strokeWidth="2.5"
                                fill="none"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default CallToActionContact;
