import React from 'react';

const CTA = () => {
    return (
        <div className="cta flex justify-center space-x-2 mb-2">
            <a href="#" className="bg-blue-500 font-lato text-white text-xl rounded-md px-8 py-2 h-14 flex items-center justify-center drop-shadow-xl">
                Get in contact
            </a>
            <span className="self-center text-gray-600">
                or
            </span>
            <a href="#" className="bg-blue-500 font-lato text-white text-xl rounded-md px-8 py-2 flex items-center justify-center drop-shadow-xl">
                Get stated
            </a>
        </div>
    );
}

export default CTA;
