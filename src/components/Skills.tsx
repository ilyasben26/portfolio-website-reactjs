import { useState } from 'react';
import { IoInformationCircleSharp } from "react-icons/io5";

const skillsData = {
    "skills": [
        {
            "category": "Programming Languages", "list": [
                "JavaScript",
                "TypeScript",
                "Java",
                "Python",
                "SQL",
                "HTML",
                "CSS",
                "C/C++",
                "Rust"
            ]
        },
        {
            "category": "Frameworks", "list": [
                "Spring Boot",
                "Flutter",
                "React",
                "Tailwind CSS"
            ]
        },
        {
            "category": "Cloud", "list": [
                "Amazon Web Services (AWS)",
                "Docker",
                "Terraform"
            ]
        },
        {
            "category": "Data Engineering", "list": [
                "Apache Kafka",
                "Apache Spark",
                "Apache Zookeeper",
                "Streamlit",
                "SQL"
            ]
        },
        {
            "category": "Cybersecurity", "list": [
                "Splunk SIEM",
                "Wireshark",
                "Burp Suite",
                "NMAP",
                "Metasploit",
                "sqlmap"
            ]
        },
    ]
};

const Skills = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className='p-6 mt-2 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">Skills</h1>
                    <div className="relative ml-1 mb-3 group">

                        <IoInformationCircleSharp />


                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            These are all technologies that I used extensively for personal projects, during my career or during university.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {skillsData.skills.map((skillCategory, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer bg-white p-2 rounded-md shadow-sm border-2 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                            onClick={() => toggleCategory(skillCategory.category)}
                        >
                            <h2 className="text-md font-medium text-gray-700">{skillCategory.category}</h2>
                            <span className={`transform transition-transform ${openCategory === skillCategory.category ? 'rotate-180' : 'rotate-0'}`}>
                                ▼
                            </span>
                        </div>
                        {openCategory === skillCategory.category && (
                            <ul className="mt-2 pl-4 list-disc list-inside text-gray-600">
                                {skillCategory.list.map((skill, skillIndex) => (
                                    <li key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
