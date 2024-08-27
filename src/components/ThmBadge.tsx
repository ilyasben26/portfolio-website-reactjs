const ThmBadge = () => {
    return (
        <div className='p-6 mt-2 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">TryHackMe</h1>
                </div>
            </div>
            <div className='mt-4 flex justify-center'>
                <div className='flex flex-col items-center'>
                    <img
                        src="/public/images/education/thm-profile.png"
                        alt="TryHackMe Badge"
                        className="object-scale-down"
                    />
                    <img
                        src="/public/images/education/thm-profile-info-transparent.png"
                        alt="TryHackMe Badge info"
                        className="object-scale-down w-2/3 mt-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default ThmBadge;
