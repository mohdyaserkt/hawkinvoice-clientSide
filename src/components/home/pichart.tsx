import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Expense Type", "Percentage"],
  ["Labor", 40.44],
  ["Travel Expense", 20.12],
  ["Rent Expense", 20.12],
  ["Materials", 19.32],
];

const options = {
  // title: "Expense Breakdown",
  backgroundColor: "#143230",
  legend: {
    textStyle: {
      color: "white",
    },
  },
};

const ExpensePieChart = () => (
  <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"375px"}
  />
);

export default ExpensePieChart;
