import React from 'react';
import LinePerformanceBarChart from "../Dashboard/LinePerformanceBarChart";

const PlaygroundPage = () => {
    return (
        <div className="p-6 grid grid-cols-2 gap-4">

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Performance Score
                </h2>
                <p className="text-gray-700 text-base">
                    <LinePerformanceBarChart />
                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Maximum Attainable Speed
                </h2>
                <p className="text-gray-700 text-base">
                    <LinePerformanceBarChart />
                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Performance Score
                </h2>
                <p className="text-gray-700 text-base">

                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Maximum Attainable Speed
                </h2>
                <p className="text-gray-700 text-base">

                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Performance Score
                </h2>
                <p className="text-gray-700 text-base">

                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 font-work-sans font-italic text-3xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Maximum Attainable Speed
                </h2>
                <p className="text-gray-700 text-base">

                </p>
            </div>


        </div>
    );
};

export default PlaygroundPage;
