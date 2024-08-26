
import { MdWorkOutline } from "react-icons/md";
import { LuTerminalSquare } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarButton from './NavbarButton';

export default function Navbar() {
    return (
        <nav className="bg-white p-1.5 flex justify-between items-center shadow-md max-w-xl rounded-xl mx-auto">
            <div className="flex space-x-2">
                <NavbarButton icon={FaRegUserCircle} label="About Me" to="/" />
                <NavbarButton icon={RiGraduationCapLine} label="Education" to="/education" />
                <NavbarButton icon={MdWorkOutline} label="Experience" to="/experience" />
                <NavbarButton icon={LuTerminalSquare} label="Projects" to="/projects" />
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center">
                Contact Me
            </button>
        </nav>
    );
}