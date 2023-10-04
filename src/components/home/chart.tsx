import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent: React.FC = () => {
  const data = [
    ["Month", "TotalSales", "TotalReceipts", "TotalExpenses"],
    ["Apr2023", 32535, 28985, 24851],
    ["May2023", 0, 0, 0],
    ["Jun2023", 0, 0, 0],
    ["Jul2023", 0, 0, 0],
    ["Aug2023", 0, 0, 0],
    ["Sep2023", 0, 0, 0],
    ["Oct2023", 0, 0, 0],
    ["Nov2023", 0, 0, 0],
    ["Dec2023", 0, 0, 0],
    ["Jan2024", 0, 0, 0],
    ["Feb2024", 0, 0, 0],
    ["Mar2024", 0, 0, 0],
  ];

  const options = {
    title: "Sales, Receipts, and Expenses from Apr 2023 to Mar 2024",
    vAxis: {
      title: "Amount (₹)",
      titleTextStyle: {
        color: "white",
      },
      textStyle: {
        color: "white",
      },
    },
    hAxis: {
      title: "Month",
      titleTextStyle: {
        color: "white",
      },
      textStyle: {
        color: "white",
      },
    },
    titleTextStyle: {
      color: "white",
    },
    legend: {
      textStyle: {
        color: "white",
      },
    },
    seriesType: "bars",
    // series: { 2: { type: "line" } },
    backgroundColor: "#143230",
  };

  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="305px"
      data={data}
      options={options}
    />
  );
};

export default ChartComponent;
