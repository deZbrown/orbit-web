import React from 'react';
import scale from '../../../assets/scale.png';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-around my-16 px-4 md:px-12 items-center">

            <div className="order-last md:order-first w-full md:w-1/2 flex justify-center md:max-w-none">
                <div className="mx-auto">
                    <img src={scale} alt="Visual" className="rounded-lg" />
                </div>
            </div>

            <div className="order-first md:order-last w-full md:w-1/2 flex flex-col justify-center items-start px-3 md:px-12 mb-12 md:mb-0">

                <h2 className="mb-4 text-5xl md:text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Scalable and Adaptable Solution
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Our API blends with your existing systems like a chameleon.
                </p>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    With our easy integration capabilities, we ensure a seamless addition to your tech stack,
                    enhancing your operations without disrupting them.
                </p>

            </div>

        </div>
    );
};

export default FeatureSection;
