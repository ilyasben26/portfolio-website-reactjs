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
        <div className='p-6 mt-2 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">Languages</h1>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                {languagesData.languages.map((language, index) => (
                    <div key={index} className="text-gray-700 p-2 bg-white rounded-lg border-2 shadow-sm">
                        <div> <span className="font-primaryBold">{language.name}:</span> {language.proficiency}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
