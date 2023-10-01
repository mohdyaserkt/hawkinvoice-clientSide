import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent: React.FC = () => {
  const data = [
    [
      "Month",
      "TotalSales",
      "TotalReceipts",
      "TotalExpenses",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  const options = {
    title: "Monthly Coffee Production by Country",
    vAxis: {
      title: "Cups",
      titleTextStyle: {
        color: 'white', // Set vAxis title text color to white
      },
      textStyle: {
        color: 'white', // Set vAxis text color to white
      },
    },
    hAxis: {
      title: "Month",
      titleTextStyle: {
        color: 'white', // Set hAxis title text color to white
      },
      textStyle: {
        color: 'white', // Set hAxis text color to white
      },
    },
    titleTextStyle: {
      color: 'white', // Set chart title text color to white
    },
    legend: {
      textStyle: {
        color: 'white', // Set legend text color to white
      },
    },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    backgroundColor: "#143230",
  };

  return (
    <Chart
      chartType="ComboChart"
      width="50%"
      height="305px"
      data={data}
      options={options}
    />
  );
};

export default ChartComponent;
