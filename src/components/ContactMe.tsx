import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiBugcrowd } from "react-icons/si";
import { IoMail } from "react-icons/io5";

const links = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/ilyas-benyamna/",
        icon: <FaLinkedin className="text-xl" />
    },
    {
        name: "email",
        url: "mailto:benyamnailyas@gmail.com",
        icon: <IoMail className="text-xl" />
    },
    {
        name: "github",
        url: "https://github.com/ilyasben26",
        icon: <FaGithub className="text-xl" />
    },
    {
        name: "bugcrowd",
        url: "https://bugcrowd.com/ilyaspen",
        icon: <SiBugcrowd className="text-xl" />
    }
];

const ContactMe = () => {
    return (
        <div className='p-6 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">Contact Me</h1>
                </div>
                <div className="flex space-x-4">
                    {links.map(link => (
                        link.url && (
                            <a key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="bg-white p-3 rounded-full border-2 hover:border-gray-500 transition-all duration-300 hover:shadow-lg">

                                    {link.icon}
                                </div></a>

                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
