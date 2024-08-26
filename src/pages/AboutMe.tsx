import myPicture from '../assets/images/profilepic.jpg'; // Adjust the path as needed

export default function AboutMe() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md max-w-xl mx-auto mt-2">
            <div className="flex items-center text-gray-600 ml-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-4"></span>
                <h1 className="text-xl">Developer</h1>
            </div>
            <div className="mt-8 flex flex-col-reverse md:flex-row items-center">

                <div>
                    <h1 className="text-3xl font-primaryBold">Ilyas Benyamna</h1>
                    <br />
                    <p className="text-sm text-justify">
                        As a very curious person,  I like to learn new things every day
                        and work on fun personal projects to apply what I learned.
                        <br />
                        I am currently looking for opportunities in Cybersecurity,
                        Software Engineering, Cloud, Data Engineering, and DevOps.
                    </p>
                </div>
                <div className="md:w-1/2 md:pl-10 flex justify-center ">
                    <img
                        src={myPicture}
                        alt="Ilyas Benyamna"
                        className="rounded-full w-52 h-52 mb-5 md:w-44 md:h-44 object-cover shadow-lg"
                    />
                </div>
            </div>

        </div>
    );
}
