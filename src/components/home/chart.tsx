import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent: React.FC = () => {
  const data = [
    ["Month", "TotalSales", "TotalReceipts", "TotalExpenses"],
    ["Apr", 32535, 28985, 24851],
    ["May", 0, 0, 0],
    ["Jun", 0, 0, 0],
    ["Jul", 0, 0, 0],
    ["Aug", 0, 0, 0],
    ["Sep", 0, 0, 0],
    ["Oct", 0, 0, 0],
    ["Nov", 0, 0, 0],
    ["Dec", 0, 0, 0],
    ["Jan", 0, 0, 0],
    ["Feb", 0, 0, 0],
    ["Mar", 0, 0, 0],
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
