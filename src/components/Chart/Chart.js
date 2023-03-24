import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((datapoint) => {
    return datapoint.value;
  });
  const totaMaximum = Math.max(...dataPointValues);
  return (
    <div className={`chart`}>
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totaMaximum}
            label={datapoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
}

export default Chart;
