import React from 'react';
import costs from '../../../assets/costs.png';

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between my-14 px-8">

            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-12 mb-8 md:mb-0">

                <h2 className="mb-4 text-6xl font-work-sans tracking-tight text-gray-900 dark:text-white text-left">
                    Reduced Operating Costs
                </h2>

                <p className="font-thin font-work-sans text-2xl text-gray-700 leading-relaxed text-justify mt-4 italic">
                    Our API adapts to your needs with its flexible pay-as-you-go model.
                    Experience true financial freedom and only pay for what you use.
                </p>

            </div>

            <div className="w-full md:w-1/2 flex justify-center px-24">

                <img src={costs} alt="Visual" className="rounded-lg" />

            </div>

        </div>
    );
};

export default FeatureSection;
