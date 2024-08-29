const languagesData = {
    "languages": [
        { "name": "English", "proficiency": "Fluent" },
        { "name": "German", "proficiency": "telc B1" },
        { "name": "French", "proficiency": "Native" },
        { "name": "Arabic", "proficiency": "Native" }
    ]
};

const Languages = () => {
    return (
        <div className='p-6 mt-2 bg-gray-100 dark:bg-[#323131] rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600 dark:text-neutral-400">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                    <h1 className="text-lg">Languages</h1>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                {languagesData.languages.map((language, index) => (
                    <div key={index} className="text-gray-700 dark:text-white p-2 bg-white dark:bg-[#3c3a3a] dark:border-[#323131] rounded-lg border-2 shadow-sm">
                        <div> <span className="font-primaryBold">{language.name}:</span> {language.proficiency}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
