import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-64 border-t-2 border-black bg-gray-800 text-white text-center">
            <p className="text-sm">© 2023 Your Company Name. All rights reserved.</p>
            <div className="flex justify-center mt-2 space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
                <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
            </div>
        </footer>

    );
}

export default Footer;
