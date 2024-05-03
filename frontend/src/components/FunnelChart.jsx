import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const FunnelChart = ({ data }) => {
  const options = {
    chart: {
      type: "bar",
      inverted: true,
    },
    title: {
      text: "Population Distribution by Age Group and Gender of India(2011)",
    },

    xAxis: [
      {
        // Primary axis with labels
        categories: data.map((item) => item.age_group),
        labels: {
          enabled: true, // Ensure labels are visible
          step: 1, // Show every label
          style: {
            color: "#333333",
            cursor: "default",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
        reversed: false,
        title: {
          text: "Years", // x-axis label
          style: {
            color: "#333333",
            fontWeight: "bolder",
            fontSize: "22px",
            rightPadding: "10px",
          },
        },
        gridLineWidth: 0.5,
        gridLineColor: "#c3c3c3",
        gridLineDashStyle: "Dash",
      },

      {
        // Mirrored axis without labels for visual effect
        opposite: true,
        reversed: false,
        linkedTo: 0,
        categories: data.map((item) => item.age_group),
        labels: {
          enabled: false, // Disable labels on the mirrored axis
          style: {
            color: "#333333",
            cursor: "default",
            fontSize: "16px",
            fontWeight: "700",
          },
        },
      },
    ],
    yAxis: {
      title: {
        text: "Percentage of Population",
        style: {
          color: "#333333",
          fontWeight: "bolder",
          fontSize: "22px",
        },
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value); // Showing positive percentages
        },
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "16px",
          fontWeight: "700",
        },
      },
      min: -12, // Adjust these values based on the range of your data
      max: 12,
      gridLineWidth: 0.5,
      gridLineColor: "#c3c3c3",
      gridLineDashStyle: "Dash",
    },
    plotOptions: {
      series: {
        stacking: "normal", // This stacks the bars on the negative side
        borderWidth: 0.5, // Set the border width of each bar
        borderColor: "black", // Set the border color of each bar
      },
    },

    tooltip: {
      formatter: function () {
        return (
          `<b>${this.series.name}, age ${this.point.category}</b><br/>` +
          `Population: ${Highcharts.numberFormat(Math.abs(this.point.y), 2)}`
        );
      },
    },
    series: [
      {
        name: "Male",
        data: data.map((item) => -item.male_percentage), // Negative values for left side
      },
      {
        name: "Female",
        data: data.map((item) => item.female_percentage), // Positive values for right side
      },
    ],
  };

  return (
    <HighchartsReact
      // Have added inline styling as HighchartsReact doesn't support ClassName
      containerProps={{ style: { height: "600px" } }}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default FunnelChart;
