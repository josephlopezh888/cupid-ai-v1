'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartWrapper from './ChartWrapper'

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: true,
            lineTension: 0.1,
            backgroundColor: '#4031b35e',
            borderColor: '#664DFF',
            borderCapStyle: '8',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#664DFF',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#664DFF',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const chartOptions = {

};


const overviewChart = () => {
 
  return (
    <>
      <div className="p-6 rounded-lg w-full bg-white overview-chart-box">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-white lg:text-[23px] md:text-[23px] text-[18px]  font-[600]">Overview</h2>
          <p className="text-[#566179] text-[14px] font-[400]">Generated Content</p>
          <div className="flex items-center justify-center overview-settings">
            <img className="w-[23px]" src="/setting.svg" alt="" />
          </div>
        </div>

        <ChartWrapper chartData={chartData} chartOptions={chartOptions} />
      
      </div>
    </>
  );
};

export default overviewChart;
