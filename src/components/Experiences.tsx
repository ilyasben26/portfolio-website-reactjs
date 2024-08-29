import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Experiences = () => {
    const experiences = [
        {
            id: 1,
            company: "KPMG Deutschland",
            subtitle: "Software Developer / Consultant (Working Student & Intern)",
            location: "Bremen, Germany",
            duration: "March 2022 - September 2023",
            description: "",
            imageUrl: "/images/experiences/KPMG-logo.png"
        }
    ];

    return (
        <div className='p-6 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">Career</h1>
                </div>

            </div>
            {experiences.map(experience => (
                <div key={experience.id} className='bg-white  border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <img
                        src={experience.imageUrl}
                        alt={experience.company}
                        className="w-20 h-20 object-scale-down rounded-md mr-4"
                    />
                    <div>
                        <h2 className="text-l font-semibold text-gray-700">{experience.company}</h2>
                        <p className="text-sm text-gray-600">{experience.subtitle}</p>
                        <div className="flex items-start mt-1">
                            <IoLocationOutline />
                            <p className="ml-1 text-xs text-gray-600">{experience.location}</p>
                        </div>
                        <div className="flex items-start mt-1">
                            <MdOutlineCalendarMonth />
                            <p className="ml-1 text-xs text-gray-600">{experience.duration}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Experiences;
