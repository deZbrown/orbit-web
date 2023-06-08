import React from 'react';
import ReactECharts from 'echarts-for-react';

const LinePerformanceBarChart = () => {
    const getOption = () => {

        const colors = {
            "performance": 'rgb(255, 149, 0)',
            "line speed": 'rgb(212, 255, 0)',
            "sound to noise": 'rgb(255, 222, 0)',
            "attenuation": 'rgb(255, 255, 0)',
            "error counters": 'rgb(255, 197, 0)'
        };

        const labels = ['attenuation', 'sound to noise', 'line speed','error counters', 'performance']

        const values = [70, 61, 75, 54, 41];

        return {
            tooltip: {
                formatter: function(params) {
                    return params.name + ': ' + params.value + '%';
                }
            },
            grid: {
                top: '5%', // Add a top margin
                left: '5%', // Increase left padding
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min: 0, // set min to 0 so the bars start at 0%
                max: 100, // set max to 100 so the bars end at 100%
                axisLine: {
                    show: false, // make x-axis line invisible
                },
                axisLabel: {
                    formatter: '{value} %'
                },
            },
            yAxis: {
                type: 'category',
                data: labels,
                axisLine: {
                    show: false, // make y-axis line invisible
                },
            },
            series: [{
                name: 'Line Performance',
                type: 'bar',
                data: labels.map((label, index) => ({
                    value: values[index],
                    itemStyle: {color: colors[label]}
                })),
                barWidth: 7, // set bar width to 10px
            }]
        };
    };

    return (
        <ReactECharts option={getOption()} style={{height: '155px', width: '400px'}}/>
    );
}

export default LinePerformanceBarChart;
