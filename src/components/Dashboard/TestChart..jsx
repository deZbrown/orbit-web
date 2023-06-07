import React from 'react';
import ReactECharts from 'echarts-for-react';

const MyChartComponent = () => {
    const getOption = () => {
        return {
            title: {
                text: 'ECharts example'
            },
            tooltip: {},
            xAxis: {
                data: ["shirt", "cardigan", "chiffon shirt", "pants", "heels", "socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
    };

    return (
        <ReactECharts option={getOption()} style={{height: '350px', width: '100%'}}/>
    );
}

export default MyChartComponent;
