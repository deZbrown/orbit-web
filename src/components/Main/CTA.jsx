import React from 'react';

const CTA = () => {
    return (
        <div className="cta flex justify-center space-x-2 mb-2">
            <a href="#" className="bg-blue-500 text-white rounded-md px-8 py-2 h-14 flex items-center justify-center">
                Get started with ØRbit.Ui
            </a>
            <span className="self-center text-gray-600">
                or
            </span>
            <a href="#" className="bg-blue-500 text-white rounded-md px-8 py-2 flex items-center justify-center">
                See how it works
            </a>
        </div>
    );
}

export default CTA;
