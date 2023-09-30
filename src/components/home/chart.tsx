import React from 'react';
import { Bar } from 'react-chartjs-2';

import dynamic from 'next/dynamic'; // Dynamic import for the Chart.js library
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 450, 600, 350, 700, 250, 800],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [200, 550, 400, 650, 300, 750, 500],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [600, 300, 750, 450, 550, 350, 800],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Dataset 4',
      data: [450, 550, 300, 750, 500, 600, 350],
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
    {
      label: 'Dataset 5',
      data: [700, 800, 350, 450, 300, 550, 600],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 6',
      data: [250, 650, 600, 350, 700, 450, 300],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
    {
      label: 'Dataset 7',
      data: [800, 450, 550, 300, 600, 350, 750],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
    {
      label: 'Dataset 8',
      data: [500, 750, 300, 550, 600, 350, 450],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 9',
      data: [350, 600, 450, 300, 550, 750, 800],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Dataset 10',
      data: [550, 300, 750, 450, 350, 600, 700],
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
  ],
};


const BarChart = () => {
    return <Bar options={options} data={data} />;
  };
  
  export default BarChart;
  