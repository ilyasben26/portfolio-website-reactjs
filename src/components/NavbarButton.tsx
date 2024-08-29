import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
    icon: React.ComponentType<{ size: number }>;
    label: string;
    to: string;
    isActive: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon: Icon, label, to, isActive }) => {
    return (
        <Link
            to={to}
            className={`p-3 dark:text-neutral-500  dark:hover:text-white  rounded-full relative group hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:transition-colors hover:duration-300 hover:ease-in-out
                ${isActive ? 'text-dark dark:text-white bg-neutral-200 dark:bg-neutral-700' : 'hover:text-black text-neutral-400'}`}
        >
            <Icon size={25} />
            <span className={`whitespace-nowrap absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out`}>
                {label}
            </span>
        </Link>
    );
};

export default NavbarButton;
