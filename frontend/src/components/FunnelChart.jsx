import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FunnelChart = ({ data }) => {
  const options = useMemo(
    () => ({
      chart: {
        type: "bar",
        inverted: true,
      },
      title: {
        text: "Population Distribution by Age Group and Gender of India(2011)",
      },
      xAxis: [
        {
          categories: data.map((item) => item.age_group),
          labels: {
            enabled: true,
            step: 1,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "16px",
              fontWeight: "700",
            },
          },
          reversed: false,
          title: {
            text: "Years",
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
          opposite: true,
          reversed: false,
          linkedTo: 0,
          categories: data.map((item) => item.age_group),
          labels: {
            enabled: false,
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
        min: -12,
        max: 12,
        gridLineWidth: 0.5,
        gridLineColor: "#c3c3c3",
        gridLineDashStyle: "Dash",
      },
      plotOptions: {
        series: {
          stacking: "normal",
          borderWidth: 0.5,
          borderColor: "black",
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
          data: data.map((item) => -item.male_percentage),
        },
        {
          name: "Female",
          data: data.map((item) => item.female_percentage),
        },
      ],
    }),
    [data]
  ); // Dependency array, `options` will only recompute if `data` changes.

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
