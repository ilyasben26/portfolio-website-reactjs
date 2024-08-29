import ProjectsLists from "../components/ProjectsList";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    return (
        <div className="rounded-xl bg-white p-2 shadow-md max-w-xl mx-auto mt-2 mb-16 ">
            <div className="m-5 flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-xl">Projects</h1>
                </div>
                <a href="https://github.com/ilyasben26" target="_blank" rel="noopener noreferrer">
                    <button
                        className="relative text-gray-400 hover:text-gray-700 bg-white text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                    >
                        View All
                        <div className='ml-2'><FaExternalLinkAlt /></div>
                    </button>
                </a>
            </div>

            <ProjectsLists />
        </div >
    );
}