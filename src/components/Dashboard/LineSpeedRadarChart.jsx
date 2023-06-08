import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineSpeedRadarChart = () => {
    const getOption = () => {
        const data = [
            [93, 96, 86, 60, 93], // Day 1
            [93, 96, 86, 60, 93], // Day 2
            [93, 96, 86, 60, 93], // Day 3
            [62, 96, 72, 60, 30], // Day 4
            [93, 96, 86, 60, 93], // Day 5
            [93, 96, 86, 60, 93], // Day 6
            [93, 96, 86, 60, 93]  // Day 7
        ];

        const dayColors = [
            { day: 'Day 1', color: 'rgb(59, 255, 0)' },
            { day: 'Day 2', color: 'rgb(59, 255, 0)' },
            { day: 'Day 3', color: 'rgb(59, 255, 0)' },
            { day: 'Day 4', color: 'rgb(255, 226, 0)' },
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
                bottom: 60,
                data: dayColors.map(item => item.day),
            },

            visualMap: {
                bottom: 160,  // Adjusts position from the bottom
                right: 0,   // Adjusts position from the right
                min: 0,
                max: 100,
                color: ['green', 'lime green', 'yellow', 'orange', 'red'],
                calculable: true
            },

            radar: {
                nameGap: 8,
                shape: 'circle',
                radius: '70%',
                indicator: [
                    {
                        text: 'Speed Stability',
                        max: 100,
                        color: '#333',
                    },
                    {
                        text: 'Max Speed',
                        max: 100,
                        color: '#333',
                    },
                    {
                        text: 'Sound to Noise',
                        max: 100,
                        color: '#333',
                    },
                    {
                        text: 'Attenuation',
                        max: 100,
                        color: '#333',
                    },
                    {
                        text: 'Actual Speed',
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
        <ReactECharts option={getOption()} style={{height: '640px', width: '512px'}}/>
    );
}

export default LineSpeedRadarChart;
