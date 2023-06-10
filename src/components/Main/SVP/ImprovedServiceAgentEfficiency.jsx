import React from 'react';
import efficiency from '../../../assets/efficiency.png';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-around my-16 px-4 md:px-12 items-center">

            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-3 md:px-12 mb-12 md:mb-0">

                <h2 className="mb-4 text-5xl md:text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Boosting Service Agent Productivity
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Empower your service agents from day one.
                </p>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Our API's intuitive design and user-friendly interface reduce training time, enabling your team to hit the ground running.
                </p>

            </div>

            <div className="w-full md:w-1/2 flex justify-center md:max-w-none">
                <div className="mx-auto">
                    <img src={efficiency} alt="Visual" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
