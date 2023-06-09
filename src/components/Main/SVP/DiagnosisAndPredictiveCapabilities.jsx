import React from 'react';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between my-14 px-8">
            <div className="w-full md:w-1/2 flex justify-center px-24">

                <img src='https://fakeimg.pl/320x480/4c5270/F652A0' alt="Visual" className="rounded-lg" />

            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-12 mb-8 md:mb-0">

                <h2 className="mb-4 text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Advanced Diagnosis and Predictive Capabilities
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Experience the future of line health analysis with our real-time diagnosis and predictive
                    capabilities. Let our API do the heavy lifting and keep your services running smoothly.
                </p>

            </div>
        </div>
    );
};

export default FeatureSection;
