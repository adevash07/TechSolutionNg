import React from "react";
import { Doughnut } from "react-chartjs-2";
import propTypes from "prop-types";
import "chartjs-plugin-labels";
import "./balanceDoughnutChart.scss";

const BalanceDoughnutChart = ({ state, onHover }) => {
  const labels =
    state.currentData === "Profile" ? state.profileLabel : state.bitsLabel2;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: state.userData,
        backgroundColor: state.backgroundColor,
        borderColor: state.backgroundColor,
        borderWidth: 1,
        datalabels: {
          anchor: "end",
        },
      },
    ],
  };

  return (
    <div className="bal-doughnut-chart">
      <Doughnut
        data={data}
        height={400}
        weight={400}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 60,
          rotation: 120,
          aspectRatio: 4 / 3,
          layout: {
            padding: 3,
          },
          elements: {
            line: {
              fill: false,
            },
            point: {
              hoverRadius: 7,
              radius: 5,
            },
          },
          legend: {
            display: false,
          },
          plugins: {
            datalabels: {
              backgroundColor: function (context) {
                return context.dataset.backgroundColor;
              },

              borderColor: "white",
              borderRadius: 25,
              borderWidth: 2,
              color: "white",
              display: function (context) {
                var dataset = context.dataset;
                var count = dataset.data.length;
                var value = dataset.data[context.dataIndex];
                return value > count * 1.5;
              },
              font: {
                weight: "bold",
              },
              padding: 6,
              formatter: Math.round,
              showZero: false,
              fontSize: 13,
              arc: true,
            },
          },
          onClick
          : (event, elements) => {
            if(!elements[0]) return
            const chart = elements[0]._chart;
            const element = chart.getElementAtEvent(event)[0];
           // const dataset = chart.data.datasets[element._datasetIndex];
            const xLabel = chart.data.labels[element._index];
            //const value = dataset.data[element._index];
           // console.log(dataset.label + " at " + xLabel + ": " + value);
            onHover(xLabel)
          }
        
        }}
        
      />
    </div>
  );
};
export default BalanceDoughnutChart;
BalanceDoughnutChart.propTypes = {
  state: propTypes.object,
  onHover: propTypes.func.isRequired
};
