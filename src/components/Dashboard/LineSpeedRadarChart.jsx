import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineSpeedRadarChart = () => {
    const getOption = () => {
        const data = [
            [62, 96, 72, 60, 30], // Day 1
            [93, 96, 86, 60, 93], // Day 2
            [93, 96, 86, 60, 93], // Day 3
            [93, 96, 86, 60, 93], // Day 4
            [93, 96, 86, 60, 93], // Day 5
            [93, 96, 86, 60, 93], // Day 6
            [93, 96, 86, 60, 93]  // Day 7
        ];

        const dayColors = [
            { day: 'Day 1', color: 'rgb(255, 226, 0)' },
            { day: 'Day 2', color: 'rgb(59, 255, 0)' },
            { day: 'Day 3', color: 'rgb(59, 255, 0)' },
            { day: 'Day 4', color: 'rgb(59, 255, 0)' },
            { day: 'Day 5', color: 'rgb(59, 255, 0)' },
            { day: 'Day 6', color: 'rgb(59, 255, 0)' },
            { day: 'Day 7', color: 'rgb(59, 255, 0)' },
        ];

        return {
            tooltip: {
                trigger: 'item'
            },

            legend: {
                type: 'scroll',
                bottom: 0,
                data: dayColors.map(item => item.day),
            },

            grid: {
                top: '0%', // Add a top margin
                left: '0%', // Increase left padding
                right: '15%',
                bottom: '0%',
                containLabel: true
            },

            visualMap: {
                bottom: 60,  // Adjusts position from the bottom
                right: 20,   // Adjusts position from the right
                min: 0,
                max: 100,
                color: ['green', 'lime green', 'yellow', 'orange', 'red'],
                calculable: true
            },

            radar: {
                axisNameGap: 20,
                radius: '70%',
                indicator: [
                    {
                        name: 'Speed Stability',
                        max: 100,
                        color: '#333',
                    },
                    {
                        name: 'Max Speed',
                        max: 100,
                        color: '#333',
                    },
                    {
                        name: 'Sound to Noise',
                        max: 100,
                        color: '#333',
                    },
                    {
                        name: 'Attenuation',
                        max: 100,
                        color: '#333',
                    },
                    {
                        name: 'Actual Speed',
                        max: 100,
                        color: '#333',
                    }
                ]
            },

            series: data.map((values, i) => ({
                name: `Day ${i + 1}`,
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                itemStyle: {
                    color: dayColors[i].color,  // Assign color from dayColors
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data: [
                    {
                        value: values,
                        name: `Day ${i + 1}`
                    }
                ]
            }))

        };
    };

    return (
        <ReactECharts option={getOption()} style={{height: '400px', width: '512px'}}/>
    );
}

export default LineSpeedRadarChart;
