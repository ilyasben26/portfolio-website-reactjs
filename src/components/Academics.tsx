import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Academics = () => {
    const academics = [
        {
            id: 1,
            university: `Constructor University Bremen /\nJacobs University Bremen`,
            degree: "Bachelor of Science in Computer Science",
            location: "Bremen, Germany",
            duration: "2020 - 2023",
            description: "",
            imageUrl: "/images/education/cub-logo.png"
        }
    ];

    return (
        <div className='p-6 mt-2 bg-gray-100  rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">University</h1>
                </div>
            </div>
            {academics.map(experience => (
                <div key={experience.id} className='bg-white  border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <img
                        src={experience.imageUrl}
                        alt={experience.university}
                        className="w-20 h-20 object-scale-down rounded-md mr-4"
                    />
                    <div>
                        <h2 style={{ whiteSpace: "pre-wrap" }} className="text-l font-semibold text-gray-700">{experience.university}</h2>
                        <p className="text-sm text-gray-600">{experience.degree}</p>
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

export default Academics;
