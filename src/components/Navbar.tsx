import { useState, useEffect } from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { LuTerminalSquare } from 'react-icons/lu';
import { RiGraduationCapLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarButton from './NavbarButton';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleContactClick = () => {
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact-me');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav
            className={`bg-white mt-4 p-1.5 flex justify-between items-center shadow-md max-w-xl rounded-xl mx-auto fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="flex space-x-2">
                <NavbarButton
                    icon={FaRegUserCircle}
                    label="About Me"
                    to="/"
                    isActive={location.pathname === '/'}
                />
                <NavbarButton
                    icon={RiGraduationCapLine}
                    label="Education"
                    to="/education"
                    isActive={location.pathname === '/education'}
                />
                <NavbarButton
                    icon={MdWorkOutline}
                    label="Experience"
                    to="/experience"
                    isActive={location.pathname === '/experience'}
                />
                <NavbarButton
                    icon={LuTerminalSquare}
                    label="Projects"
                    to="/projects"
                    isActive={location.pathname === '/projects'}
                />
            </div>
            <button
                className="bg-black text-white py-2 px-4 rounded-lg flex items-center"
                onClick={handleContactClick}
            >
                Contact Me
            </button>
        </nav>
    );
}
