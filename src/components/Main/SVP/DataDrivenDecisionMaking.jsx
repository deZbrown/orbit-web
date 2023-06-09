import React from 'react';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between my-14 px-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-12 mb-8 md:mb-0">

                <h2 className="mb-4 text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Data-Driven AI Decision Making
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Transform raw data into powerful strategies. Our SaaS API offers actionable insights that allow you
                    to optimize your VDSL lines' performance, allocate resources effectively, and unearth patterns for
                    strategic planning.
                </p>

            </div>

            <div className="w-full md:w-1/2 flex justify-center px-24">

                <img src='https://fakeimg.pl/320x480/4c5270/F652A0' alt="Visual" className="rounded-lg" />

            </div>
        </div>
    );
};

export default FeatureSection;
