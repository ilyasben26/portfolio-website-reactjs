

const Profile = () => {
    return (
        <div>
            <div className="m-5 flex items-center text-gray-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-gray-300 dark:bg-neutral-500 rounded-full mr-4"></span>
                <h1 className="text-xl">Developer</h1>
            </div>
            <div className="m-3 flex flex-col-reverse md:flex-row items-center">
                <div>
                    <h1 className="text-3xl font-primaryBold">Ilyas Benyamna</h1>
                    <br />
                    <p className="text-sm text-justify dark:text-neutral-300">
                        As an all-rounder in anything IT-related,
                        <br />
                        I am currently looking for opportunities in Cybersecurity,
                        Software Engineering, Cloud, Data Engineering, and DevOps.
                    </p>
                </div>
                <div className="md:w-2/3 md:pl-10 flex justify-center">
                    <img
                        src="/images/profilepic.jpg"
                        alt="Ilyas Benyamna"
                        className="border-4 border-gray-400 dark:border-neutral-700 rounded-full w-52 h-52 mb-5 md:w-52 md:h-52 object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
