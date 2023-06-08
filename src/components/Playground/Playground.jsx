import React from 'react';
import LinePerformanceBarChart from "../Dashboard/LinePerformanceBarChart";
import LineSpeedRadarChart from "../Dashboard/LineSpeedRadarChart";
import ErrorCountScatterPlotChart from "../Dashboard/ErrorCountScatterPlotChart";

const PlaygroundPage = () => {
    return (
        <div className="p-6 grid grid-cols-2 gap-1.5 bg-gray-200 rounded-lg">

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 text-2xl mb-2 border-b border-gray-200 pb-2 text-left">
                    Performance Score
                </h2>
                <LinePerformanceBarChart />
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 text-2xl mb-2 border-b border-gray-200 pb-2 text-justify">
                    Error Counters
                </h2>
                <ErrorCountScatterPlotChart />
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-2 col-span-1">
                <h2 className="text-gray-600 text-2xl mb-2 border-b border-gray-200 pb-2 text-justify">
                    Line Stability Score
                </h2>
                <LineSpeedRadarChart />
            </div>


            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 text-2xl mb-2 border-b border-gray-200 pb-2 text-justify">
                    Performance Summary
                </h2>
                <p className="font-thin font-work-sans text-lg text-gray-900 leading-relaxed text-justify mb-1">
                    Based on the provided analysis, the line is experiencing poor stability in terms of maximum attainable
                    speed and significant drift in actual speed.
                </p>
                <p className="font-thin font-work-sans text-lg text-gray-900 leading-relaxed text-justify mb-1">
                    The SNR margin drift is also poor, but the line attenuation margin is good. Fortunately, there were
                    no significant disruptions in the past 24 hours.
                </p>
                <p className="font-thin font-work-sans text-lg text-gray-900 leading-relaxed text-justify">
                    Overall, there
                    are some issues with the line that need to be addressed to improve its performance.
                </p>
            </div>

            <div className="card bg-white rounded shadow-lg p-6 row-span-1 col-span-1">
                <h2 className="text-gray-600 text-2xl mb-2 border-b border-gray-200 pb-2 text-justify">
                    Action Summary
                </h2>
                <p className="font-thin font-work-sans text-lg text-gray-900 leading-relaxed text-justify mb-1">
                    Based on the analysis, there seems to be some issues with the line that might benefit from the intervention
                    of a technician.
                </p>
                <p className="font-thin font-work-sans text-lg text-gray-900 leading-relaxed text-justify mb-2">
                    Adjustment of the DSLAM line profile or further observation may also be beneficial, but it
                    is recommended to involve a technician.
                </p>
                <div className="flex justify-center space-x-8 mt-6">
                    <button className="bg-sky-600 hover:bg-blue-700 text-white py-1 px-5 rounded">
                        Monitor Line
                    </button>
                    <button className="bg-sky-600 hover:bg-blue-700 text-white py-1 px-5 rounded">
                        Change Profile
                    </button>
                    <button className="bg-sky-600 hover:bg-blue-700 text-white py-1 px-5 rounded">
                        Send Field-Tech
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PlaygroundPage;
