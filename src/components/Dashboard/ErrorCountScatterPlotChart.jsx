import React from 'react';
import ReactECharts from 'echarts-for-react';

const ErrorScatterChart = () => {
    const getOption = () => {
        const data = [
            ['00:00', 0],
            ['01:00', 0],
            ['02:00', 0],
            ['03:00', 0],
            ['04:00', 28],
            ['05:00', 244],
            ['06:00', 0],
            ['07:00', 0],
            ['08:00', 0],
            ['09:00', 267],
            ['10:00', 186],
            ['11:00', 123],
            ['12:00', 0],
            ['13:00', 0],
            ['14:00', 0],
            ['15:00', 77],
            ['16:00', 29],
            ['17:00', 112],
            ['18:00', 0],
            ['19:00', 0],
            ['20:00', 0],
            ['21:00', 0],
            ['22:00', 3],
            ['23:00', 3],
        ];

        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                },
                padding: 10,
            },

            xAxis: {
                type: 'category',
                data: data.map(item => item[0]),
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 15,
                },
            },

            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 15,
                },
            },

            series: [
                {
                    name: 'Error Count',
                    type: 'scatter',
                    data: data,
                    symbolSize: function (data) {
                        return Math.sqrt(data[1]) * 3; // adjust size of scatter points
                    },
                    emphasis: {
                        label: {
                            show: true,
                            formatter: '{b} : {c}',
                            verticalAlign: 'middle',
                            align: 'right',
                        },
                    },
                },
            ],
        };
    };

    return <ReactECharts option={getOption()} style={{ height: '320px', width: '512px' }} />;
};

export default ErrorScatterChart;
