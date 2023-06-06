import React from 'react';
import orbitLogo from '../assets/orbit-logo.png';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6">
            <div className="logo">
                <img src={orbitLogo} alt="ØRbit.Ui logo" className="w-16 h-16 object-cover rounded-full"/>
            </div>
            <nav className="flex-grow">
                <ul className="flex justify-center space-x-6 text-lg">
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-500">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-500">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-500">
                            Docs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-500">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-blue-500">
                            Sign in
                        </a>
                    </li>
                </ul>
            </nav>
            <a href="#" className="bg-blue-500 text-white rounded-md px-2 h-14 flex items-center justify-center">
                Get started
            </a>
        </header>
    );
}

export default Header;
