"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// @ts-ignore
const ChartWrapper = ({ chartData, chartOptions }) => {
    const chartRef = useRef(null);

    useEffect(() => {
      const chartCanvas = chartRef.current;
  
      if (chartCanvas) {
        // @ts-ignore
        const ctx = chartCanvas.getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'line', 
          data: chartData,
          options: chartOptions,
        });
  
        return () => {
          newChart.destroy();
        };
      }
    }, [chartData, chartOptions]);
  
    return <canvas className='max-w-full w-full' ref={chartRef}></canvas>;
  };

export default ChartWrapper