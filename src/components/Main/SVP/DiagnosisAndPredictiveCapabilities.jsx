import React from 'react';
import ai from '../../../assets/ai-helper.png';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-around my-16 px-4 md:px-12 items-center">

            <div className="order-last md:order-first w-full md:w-1/2 flex justify-center md:max-w-none">

                <div className="mx-auto">
                    <img src={ai} alt="Visual" className="rounded-lg" />
                </div>

            </div>

            <div className="order-first md:order-last w-full md:w-1/2 flex flex-col justify-center items-start px-3 md:px-12 mb-12 md:mb-0">

                <h2 className="mb-4 text-5xl md:text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Advanced Diagnosis and Predictive Capabilities
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Experience the future of line health analysis with our real-time diagnosis and predictive capabilities.
                </p>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Let our API do the heavy lifting and keep your services running smoothly.
                </p>

            </div>
        </div>
    );
};

export default FeatureSection;
