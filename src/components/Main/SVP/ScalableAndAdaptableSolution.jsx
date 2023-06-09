import React from 'react';
import scale from '../../../assets/scale.png';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between my-14 px-8">

            <div className="w-full md:w-1/2 flex justify-center px-24">

                <img src={scale} alt="Visual" className="rounded-lg" />

            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-12 mb-8 md:mb-0">

                <h2 className="mb-4 text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Scalable and Adaptable Solution
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Our API blends with your existing systems like a chameleon. With our easy integration capabilities,
                    we ensure a seamless addition to your tech stack, enhancing your operations without disrupting them.
                </p>

            </div>

        </div>
    );
};

export default FeatureSection;
