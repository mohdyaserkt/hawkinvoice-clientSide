import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
  const data = [
    ['Expense Type', 'Percentage'],
    ['Labor', 40.44],
    ['Travel Expense', 20.12],
    ['Rent Expense', 20.12],
    ['Materials', 19.32],
  ];

  const options = {
    title: 'Expense Breakdown',
    pieHole: 0.4, // This makes it a donut chart, adjust as needed
    width: 400,
    height: 300,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default PieChart;
