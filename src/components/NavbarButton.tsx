import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ComponentType<{ size: number }>;
    label: string;
    to: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon: Icon, label, to }) => {
    return (
        <Link to={to} className="p-3 text-gray-400 hover:text-black rounded-full relative group hover:bg-gray-300">
            <Icon size={25} />

            <span className="whitespace-nowrap absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                {label}
            </span>
        </Link>
    );
};

export default NavbarButton;
